import { all, call, put, takeLatest } from "redux-saga/effects";

import store from "../store/Store";
import { fetchFailure, getUnitSuccess, fetchAllUnitsSuccess } from "../actionTypes/actionTypes";
import { FETCH_ALL_UNITS_REQUEST, FILTER_BY_FILTERS_REQUEST, FILTER_BY_FILTERS_SUCCESS, GET_UNIT_REQUEST} from "../actionTypes/actionTypes";
import { FilterByFiltersRequest, GetUnitRequest, GetUnitRequestPayload} from "../actionCreators/actionCreators";
import { unitData } from "../../interfaces/interfaces" 

import units from "../../components/data/age-of-empires-units.json";

const getAllUnits = (): unitData[] => {
    const objectArray = Object.values(units.units);
    const unitsArray = objectArray.map((unit): unitData => {
        if (unit.cost === undefined || unit.cost == null) {
            return {
                ...unit,
                cost: {
                    Wood: 0,
                    Gold: 0,
                    Food: 0,
                },
            };
        } else {
            return {
                ...unit,
                cost: {
                    Wood: unit.cost.Wood || 0,
                    Gold: unit.cost.Gold || 0,
                    Food: unit.cost.Food || 0,
                },
            }
        }
    });
    return unitsArray;
};

function getUnit(payload: GetUnitRequestPayload) {
    const response = getAllUnits();
    const unit = response.find((unit) => unit.id === payload.id);
    return unit;
}

function* getUnitSaga(action: GetUnitRequest) {
    try {
        const response: unitData = yield call(getUnit, action.payload);
        yield put(
            getUnitSuccess({
                selectedUnit: response,
            })
        );
    }
    catch (e: any) {
        //TODO add error handling
        yield put(fetchFailure(
            {
                error: e.message,
            }
        ));
    }
}


function* fetchAllUnitsSaga() {
    try {
        const response: unitData[] = yield call(getAllUnits);
        yield put(
            fetchAllUnitsSuccess({
                units: response,
            })
        );
    } catch (e: any) {
        yield put(
            //TODO add error handling
            fetchFailure({
                error: e.message,
            })
        );
    }
}


function* filterByFiltersSaga(action: FilterByFiltersRequest) {

    const units = store.getState().filter.units;
    let filters = store.getState().filter.costFilters.filters;
    let filtersRanges = store.getState().filter.costFilters.filtersRanges;
    let ageFilter = store.getState().filter.ageFilter;


    if (action.payload.woodFilter) {
        filters.push("Wood");
    }

    if (action.payload.woodFilterRange) {
        filtersRanges.Wood = action.payload.woodFilterRange;
    }

    if (action.payload.woodFilter === false) {
        filters = filters.filter(function (item: string) {
            return item !== "Wood";
        }
        );
    }

    //Food Filter Check
    if (action.payload.foodFilter) {
        filters.push("Food");
    }
    if (action.payload.foodFilterRange) {
        filtersRanges.Food = action.payload.foodFilterRange;
    }

    if (action.payload.foodFilter === false) {
        filters = filters.filter(function (item: string) {
            return item !== "Food";
        }
        );
    }

    //Gold Filter Check
    if (action.payload.goldFilter) {
        filters.push("Gold");

    }
    if (action.payload.goldFilterRange) {
        filtersRanges.Gold = action.payload.goldFilterRange;
    }


    if (action.payload.goldFilter === false) {
        filters = filters.filter(function (item: string) {
            return item !== "Gold";
        }
        );
    }

    let filteredUnits = units.filter(function (unit:any) {
       
        let wood = unit.cost.Wood;
        let food = unit.cost.Food;
        let gold = unit.cost.Gold;

       
        let woodFilter = filters.includes("Wood");
        let foodFilter = filters.includes("Food");
        let goldFilter = filters.includes("Gold");

        
        if (woodFilter && (wood || wood === 0)) {
            if (wood < filtersRanges.Wood[0] || wood > filtersRanges.Wood[1]) {
                return false;
            }
        }
        if (woodFilter && !wood && wood !== 0) {
            return false;
        }

        
        if (foodFilter && (food || food === 0)) {
            if (food < filtersRanges.Food[0] || food > filtersRanges.Food[1]) {
                return false;
            }
        }
        if (foodFilter && !food && food !== 0) {
            return false;
        }

       
        if (goldFilter && (gold || gold === 0)) {
            if (gold < filtersRanges.Gold[0] || gold > filtersRanges.Gold[1]) {
                return false;
            }
        }
        if (goldFilter && !gold && gold !== 0) {
            return false;
        }


        
        if (ageFilter !== "All") {
            if (unit.age !== ageFilter) {
                return false;
            } else {
                return true;
            }
        }

        return true;
    });


    yield put({
        type: FILTER_BY_FILTERS_SUCCESS,
        payload: {
            filters,
            filtersRanges,
            filteredUnits,
            ageFilter
        },
    });
}

function* unitSaga() {
    yield all([
        takeLatest(FETCH_ALL_UNITS_REQUEST, fetchAllUnitsSaga),
        takeLatest(FILTER_BY_FILTERS_REQUEST, filterByFiltersSaga),
        takeLatest(GET_UNIT_REQUEST, getUnitSaga),
    ]);
}

export default unitSaga;