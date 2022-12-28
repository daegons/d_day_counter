const dateFormMaker = () => {
  const inputYear = document.querySelector('#target_year_input').value;
  const inputMonth = document.querySelector('#target_month_input').value;
  const inputDate = document.querySelector('#target_date_input').value;

  // const dateFormat = inputYear +'-'+ inputMonth +'-'+ inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

  return dateFormat;
  // console.log(inputYear, inputMonth, inputDate);

  //input 박스에서 데이터를 가져오는 함수//
};

const counterMaker = () => {
  const targetDateInput = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;

  const remainingDate = Math.floor(remaining / 3600 / 24);
  const remainingHour = Math.floor(remaining / 3600) % 24;
  const remainingMin = Math.floor(remaining / 60) % 60;
  const remainingSec = Math.floor(remaining) % 60;

  console.log(remainingDate, remainingHour, remainingMin, remainingSec);
};
