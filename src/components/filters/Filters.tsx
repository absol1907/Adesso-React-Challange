import React from 'react';
import { Container, Slider, Paper, SegmentedControl, Checkbox } from '@mantine/core';
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { filterByFiltersRequest } from "../../redux/actionTypes/actionTypes";
import styles from "./filters.module.scss";

type FiltersProps = {
    pageTitle?: string;
};

const Filters: React.FC<FiltersProps> = () => {
    const loading = useAppSelector((state) => state.filter.pending);
    const woodFilter = useAppSelector(state => state.filter.costFilters.filters.includes("Wood"));
    const foodFilter = useAppSelector(state => state.filter.costFilters.filters.includes("Food"));
    const goldFilter = useAppSelector(state => state.filter.costFilters.filters.includes("Gold"));
    const woodFilterRange = useAppSelector(state => state.filter.costFilters.filtersRanges.Wood);
    const foodFilterRange = useAppSelector(state => state.filter.costFilters.filtersRanges.Food);
    const goldFilterRange = useAppSelector(state => state.filter.costFilters.filtersRanges.Gold);

    const dispatch = useAppDispatch();

    return (
        <Container
       
        >
            <Paper  className={styles.filters}>
       
                <h2> Ages</h2>
                <SegmentedControl color={"blue"}
                    data={[
                        { label: 'All', value: 'All' },
                        { label: 'Dark', value: 'Dark' },
                        { label: 'Feudal', value: 'Feudal' },
                        { label: 'Castle', value: 'Castle' },
                        { label: 'Imperial', value: 'Imperial' },
                    ]}
                    orientation="horizontal"
                    onChange={(value) =>
                        dispatch(filterByFiltersRequest({ ageFilter: value }))
                    }
                    fullWidth
                    disabled={loading ? true : false}

                   
                />    <h2> Costs</h2>

                <Checkbox label="Wood" color={"dark"}
                    onChange={(event) => {
                        dispatch(filterByFiltersRequest({ woodFilter: event.currentTarget.checked }))
                    }}
                />
                <Slider max={200} color={"gray"}
                    onChangeEnd={(value) => {
                        dispatch(filterByFiltersRequest({ woodFilterRange: [0, value] }))
                    }
                    }
                    disabled={loading || !woodFilter ? true : false}
                    defaultValue={200}
                    data-testid="wood-filter-slider"
                />

                <Checkbox label="Food" color={"dark"}
                    onChange={(event) => {
                        dispatch(filterByFiltersRequest({ foodFilter: event.currentTarget.checked }))
                    }} />
                <Slider max={200} color={"lime"}
                    onChangeEnd={(value) => {
                        dispatch(filterByFiltersRequest({ foodFilterRange: [0, value] }))
                    }
                    }
                    disabled={loading || !foodFilter ? true : false}
                    defaultValue={200}
                />

                <Checkbox label="Gold" color={"dark"}
                    onChange={(event) => {
                        dispatch(filterByFiltersRequest({ goldFilter: event.currentTarget.checked }))
                    }}
                />
                <Slider max={200} color="orange" 
                    onChangeEnd={(value) => {
                        dispatch(filterByFiltersRequest({ goldFilterRange: [0, value] }))
                    }
                    }
                    disabled={loading || !goldFilter ? true : false}
                    defaultValue={200}
                />
            </Paper>
        </Container>
    );
}

export default Filters;