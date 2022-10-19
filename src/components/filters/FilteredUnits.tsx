import React, { useEffect} from 'react';
import { Container, Paper, Table } from '@mantine/core';
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { fetchAllUnitsRequest } from "../../redux/actionTypes/actionTypes";
import { Link } from 'react-router-dom';
import styles from "./filteredunits.module.scss"


type FilteredUnitsProps = {
    pageTitle?: string;
};

const FilteredUnits: React.FC<FilteredUnitsProps> = () => {
    const loading = useAppSelector((state) => state.filter.pending);
    const filteredUnitsArray = useAppSelector(state => state.filter.filteredUnits);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchAllUnitsRequest());
    }, [dispatch]);




    return (
        <Container
        >
            <Paper
                className={styles.filteredunits}
            >
                <h2>
                    Filtered Units {loading ? 'Loading...' : ''}
                </h2>
                <Table highlightOnHover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Costs</th>
                        
                        </tr>
                    </thead>
                   
                   {filteredUnitsArray && filteredUnitsArray.length> 0 ? (
                       <tbody>{filteredUnitsArray.map((unit) => (
                       
                      <tr key={unit.id + unit.name}>
                          
                            <td>{unit.id}</td>
                            <td><Link to={`/units/${unit.id}`} className={styles.units} 
                                target="_blank"> {unit.name} </Link></td>
                            <td>{unit.age}</td>
                            <td> 
                                {unit.cost.Wood || unit.cost.Wood === 0 ? <span>Wood: {unit.cost.Wood+ " "}</span>: null}
                                {unit.cost.Food || unit.cost.Food === 0 ? <span>Food: {unit.cost.Food+ " "}</span>: null}
                                {unit.cost.Gold || unit.cost.Gold === 0 ? <span>Gold: {unit.cost.Gold+ " "}</span>: null}
                            </td>                         
                        </tr>
                       
                    ))}
                    </tbody>) : (
                    <tbody>{
                        <tr key={"no units"}>
                            <td>{"No units found."}</td>
                        </tr>
                    }
                    </tbody>)}
                </Table>
            </Paper>

        </Container>
    );
}

export default FilteredUnits;