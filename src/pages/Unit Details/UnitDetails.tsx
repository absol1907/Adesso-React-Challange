import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks"
import { Container, Paper, Table } from '@mantine/core'
import { getUnitRequest } from "../../redux/actionTypes/actionTypes"

import styles from "../../components/filters/filteredunits.module.scss"


export default function Unit() {
  const dispatch = useAppDispatch();



  const { unitId } = useParams<{ unitId: string }>()
  const unitIdNumber = parseInt(unitId || '0');

  useEffect(() => {
    dispatch(getUnitRequest({ id: unitIdNumber }));
  }, [dispatch, unitIdNumber]);


  const selectedUnit = useAppSelector(state => state.filter.selectedUnit);

  const unitArray = Object.entries(selectedUnit || {});



  if (selectedUnit) {
    return (

      <Container
      >
        <Paper className={styles.unitdetails}
        >
          <h2>
            {selectedUnit.name}
          </h2>
          <Table>
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {unitArray.map((item) => (
                <tr key={
                  item[0]
                }>
                  <td><p>{(item[0]).toUpperCase().split("_").join(" ")}</p></td>
                  <td><p>{(JSON.stringify(item[1])).replace(/["{}[\]]/g, "")}</p></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Paper>
      </Container>
    )
  }
  else {
    return (
      <Container
      >
        <Paper>
          <h2>
            Unit not found
          </h2>
        </Paper>
      </Container>
    )
  }

}