import * as creators from "../actionCreators/actionCreators"


export const GET_UNIT_REQUEST = "GET_UNIT_REQUEST";

export const getUnitRequest = (payload: creators.GetUnitRequestPayload): creators.GetUnitRequest => ({
  type: GET_UNIT_REQUEST,
  payload
});

export const GET_UNIT_SUCCESS = "GET_UNIT_SUCCESS";

export const getUnitSuccess = (payload: creators.GetUnitSuccessPayload): creators.GetUnitSuccess => ({
  type: GET_UNIT_SUCCESS,
  payload
});

export const FETCH_ALL_UNITS_REQUEST = "FETCH_ALL_UNITS_REQUEST";

export const fetchAllUnitsRequest = (): creators.FetchAllUnitsRequest => ({
  type: FETCH_ALL_UNITS_REQUEST,
});

export const FETCH_ALL_UNITS_SUCCESS = "FETCH_ALL_UNITS_SUCCESS";

export const fetchAllUnitsSuccess = (
  payload: creators.FetchAllUnitsSuccessPayload
): creators.FetchAllUnitsSuccess => ({
  type: FETCH_ALL_UNITS_SUCCESS,
  payload,
});

export const FILTER_BY_FILTERS_REQUEST = "FILTER_BY_FILTERS_REQUEST";

export const filterByFiltersRequest = (payload: creators.FilterByFiltersRequestPayload): creators.FilterByFiltersRequest => ({
  type: FILTER_BY_FILTERS_REQUEST,
  payload,
});

export const FILTER_BY_FILTERS_SUCCESS = "FILTER_BY_FILTERS_SUCCESS";

export const filterByFiltersSuccess = (payload:creators.FilterByFiltersSuccessPayload): creators.FilterByFiltersSuccess => ({
  type: FILTER_BY_FILTERS_SUCCESS,
  payload,
});

export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchFailure = (
  payload: creators.FetchFailurePayload): creators.FetchFailure => ({
  type: FETCH_FAILURE,
  payload,
});














