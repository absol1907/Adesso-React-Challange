import { Container, Grid, Col } from '@mantine/core';
import Filters from "../../components/filters/Filters";
import FilteredUnits from "../../components/filters/FilteredUnits";

type UnitsProps = {
  pageTitle?: string;
};



const Units: React.FC<UnitsProps> = () => {
  return (
    <Container
      size="xl"
    >
      <Grid>
        <Col md={6} sm={12} lg={4} span={12}>
          <Filters />
        </Col>
        <Col md={6} sm={12} lg={8} span={12}>
          <FilteredUnits />
        </Col>

      </Grid>

    </Container>
  );
}

export default Units;