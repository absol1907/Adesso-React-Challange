export interface unitData {
    id: number;
    name: string;
    description: string;
    expansion: string;
    age: string;
    cost: Cost;
    build_time?: number | null;
    reload_time?: number | null;
    attack_delay?: number | null;
    movement_rate?: number | null;
    line_of_sight: number;
    hit_points: number;
    range?: number | string;
    attack?: number | null;
    armor: string;
    attack_bonus?: (string)[] | null;
    accuracy?: string | null;
    search_radius?: number | null;
    blast_radius?: number | null;
    armor_bonus?: (string)[] | null;
  }

  export interface Cost {
    Wood: number;
    Gold: number;
    Food: number;
  }

  export interface Filter {
    pending: boolean;
    units: unitData[];
    filteredUnits: unitData[] | null;
    selectedUnit: unitData | null;
    error: string | null;
    ageFilter: string;
    costFilters: {
      filters: string[];
      filtersRanges: {
        "Wood": [number, number],
        "Food": [number, number],
        "Gold": [number, number],
      }
    };
  }