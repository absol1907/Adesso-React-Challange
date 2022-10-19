import * as actions from "../actionTypes/actionTypes";

import { unitData } from "../../interfaces/interfaces";



export interface FilterByFiltersRequest {
  type: typeof actions.FILTER_BY_FILTERS_REQUEST;
  payload: FilterByFiltersRequestPayload;
}

export type FilterByFiltersSuccess = {
  type: typeof actions.FILTER_BY_FILTERS_SUCCESS;
  payload: FilterByFiltersSuccessPayload;
};

export type GetUnitRequest = {
  type: typeof actions.GET_UNIT_REQUEST;
  payload: GetUnitRequestPayload;
};

export type GetUnitSuccess = {
  type: typeof actions.GET_UNIT_SUCCESS;
  payload: GetUnitSuccessPayload;
};

export type GetUnitRequestPayload = {
  id: number;
};

export type GetUnitSuccessPayload = {
  selectedUnit: unitData;
};





export interface FilterByFiltersRequestPayload {
  ageFilter?: string;
  woodFilter?: boolean;
  goldFilter?: boolean;
  foodFilter?: boolean;
  woodFilterRange?: [number, number];
  goldFilterRange?: [number, number];
  foodFilterRange?: [number, number]
}

export interface FilterByFiltersSuccessPayload {
  filters: string[];
  filtersRanges: {
    "Wood": [number, number],
    "Food": [number, number],
    "Gold": [number, number],
  };
  filteredUnits: unitData[];
  ageFilter: string;
}



export interface FetchUnitSuccessPayload {
  units: unitData[];
}
export interface FetchAllUnitsSuccessPayload {
  units: unitData[];
}
export interface FetchAllUnitsSuccess {
  type: typeof actions.FETCH_ALL_UNITS_SUCCESS;
  payload: FetchAllUnitsSuccessPayload;
}

export interface FetchFailurePayload {
  error: string;
}
export interface FetchAllUnitsRequest {
  type: typeof actions.FETCH_ALL_UNITS_REQUEST;
}



export type FetchFailure = {
  type: typeof actions.FETCH_FAILURE;
  payload: FetchFailurePayload;
};

export type FilterActions =
  | FetchAllUnitsRequest
  | FetchAllUnitsSuccess
  | GetUnitRequest
  | GetUnitSuccess
  | FilterByFiltersRequest
  | FilterByFiltersSuccess
  | FetchFailure;