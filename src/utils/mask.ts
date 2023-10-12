function dateMask(value: string): string {
  // removes everything that is not a number
  value = value.replace(/\D/g, "");

  // regex to format date in dd/mm/yyyy format
  const regex = /(0?[1-9]|[12][0-9]|3[01])(0?[1-9]|1[012])(\d{4}$)/;

  // Format for date: dd/mm/yyyy
  value = value.replace(regex, "$1/$2/$3");

  return value;
}

export { dateMask };
