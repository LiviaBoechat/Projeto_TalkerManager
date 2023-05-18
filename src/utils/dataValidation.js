function dayValidatyion(day) {
    return day >= 1 && day <= 31;
  }
  
  function monthValidation(month) {
    return month >= 1 && month <= 12;
  }
  
  function yearValidation(year) {
    return year >= 1900 && year <= 9999;
  }
  
  function dateFormatValidation(insertedDate) {
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  
    if (!dateRegex.test(insertedDate)) {
      return false;
    }
  
    const [day, month, year] = insertedDate.split('/').map(Number);
    return (
        dayValidatyion(day) && monthValidation(month) && yearValidation(year)
    );
  }
  
  module.exports = dateFormatValidation;