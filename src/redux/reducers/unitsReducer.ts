import * as actions from "../actionTypes/actionTypes";

import { FilterActions } from "../actionCreators/actionCreators";
import { Filter } from "../../interfaces/interfaces";

const initialState: Filter = {
  pending: false,
  units: [],
  filteredUnits: [],
  selectedUnit: null,
  error: null,
  ageFilter: "All",
  costFilters: {
    filters: [],
    filtersRanges:
    {
      Wood: [0, 200],
      Gold: [0, 200],
      Food: [0, 200],

    },
  }
};

export default (state = initialState, action: FilterActions) => {
  switch (action.type) {
    case actions.FETCH_ALL_UNITS_REQUEST:
      return {
        ...state,
        pending: true,
      };
      case actions.GET_UNIT_REQUEST:
        return {
          ...state,
          ...action.payload,
          pending: true,
        };
        case actions.GET_UNIT_SUCCESS:
          return {
            ...state,
            pending: false,
            selectedUnit: action.payload.selectedUnit,
          };
    case actions.FILTER_BY_FILTERS_REQUEST:
      return {
        ...state,
        ...action.payload,
        pending: true,
      };
    case actions.FILTER_BY_FILTERS_SUCCESS:
      return {
        ...state,
        costFilters: {
          filters: action.payload.filters,
          filtersRanges: action.payload.filtersRanges,
        },
        filteredUnits: action.payload.filteredUnits,
        ageFilter: action.payload.ageFilter,
        pending: false,
      };
      case actions.FETCH_ALL_UNITS_SUCCESS:
        return {
          ...state,
          pending: false,
          units: action.payload.units,
          filteredUnits: action.payload.units,
          error: null,
        };
    case actions.FETCH_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
} 