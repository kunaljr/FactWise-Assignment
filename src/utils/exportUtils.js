export const exportToCSV = (gridRef, fileName = 'data.csv') => {
  if (gridRef?.current?.api) {
    gridRef.current.api.exportDataAsCsv({ fileName });
  }
};
