export type FiltersRoomsProps = {
    setFilters: (filterName: string, filterValue: string) => void;
    clearFilters: () => void;
    filters: {
      pricePerNight: string;
      beds: string;
      baths: string;
    };
  };