const messageContainer = document.querySelector('#d_day_message');
const container = document.querySelector("#d_day_container");
const intervalIdArr = [];

container.style.display = "none";
messageContainer.innerHTML = "<h3>D_Day를 입력해 주세요</h3>";

const dateFormMaker = () => {
  const inputYear = document.querySelector('#target_year_input').value;
  const inputMonth = document.querySelector('#target_month_input').value;
  const inputDate = document.querySelector('#target_date_input').value;

  // const dateFormat = inputYear +'-'+ inputMonth +'-'+ inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

  return dateFormat;

  //input 박스에서 데이터를 가져오는 함수//
};

const counterMaker = () => {
  const targetDateInput = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;

  if (remaining <= 0) {
	container.style.display = 'none'
    messageContainer.innerHTML = "<h3>타이머가 종료 되었습니다</h3>";
	messageContainer.style.display = 'flex';
	setClearInterval();
	return;
  } else if (isNaN(remaining)) {
	container.style.display = 'none'
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다</h3>";
	messageContainer.style.display = 'flex';
	setClearInterval();
	return;
  };

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHour: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60
  };

  const documentArr = ['days', 'hours', 'min', 'sec'];
  const timeKeys = Object.keys(remainingObj);

  let i = 0;
  for (let tag of documentArr) {
	document.getElementById(tag).textContent = remainingObj[timeKeys[i]];
	i++;
  }
};

const starter = function() {
	container.style.display = 'flex';
	messageContainer.style.display = 'none';
	counterMaker();
	const intervalId = setInterval(counterMaker, 1000);
	intervalIdArr.push(intervalId);
};

const setClearInterval = function () {
	for (let i = 0; i < intervalIdArr.length; i++){
		clearInterval(intervalIdArr[i]);
	}
};

const resetTimer = function () {
	container.style.display = 'none';
	messageContainer.innerHTML = "<h3>D_Day를 입력해 주세요</h3>";
	messageContainer.style.display = 'flex';
	setClearInterval()
}


