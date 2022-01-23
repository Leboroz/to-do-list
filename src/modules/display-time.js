import { DateTime } from "luxon";

const isLessThanTen = (time) => {
  return time < 10;
};

const createTimeElements = () => {
  const timeElement = document.createElement("span");
  timeElement.className = "frag";
  return timeElement;
};

const createFragments = (element) => {
  const hourElement = createTimeElements();
  const minuteElement = createTimeElements();
  const secondElement = createTimeElements();
  const unitElement = createTimeElements();
  element.append(
    hourElement,
    ":",
    minuteElement,
    ":",
    secondElement,
    " ",
    unitElement
  );
  console.log(element);
};

const displayClock = (element) => {
  const now = DateTime.now();
  let { hour, minute, second } = now;
  let unit = "AM";

  if (hour < 1 || hour > 12) {
    hour = Math.abs(hour - 12);
    unit = "PM";
  }

  const frags = element.children;
  frags[0].innerHTML = isLessThanTen(hour) ? "0" + hour : hour;
  frags[1].innerHTML = isLessThanTen(minute) ? "0" + minute : minute;
  frags[2].innerHTML = isLessThanTen(second) ? "0" + second : second;
  frags[3].innerHTML = unit;
};

const displayDate = (element) => {
  element.innerHTML = DateTime.now().toLocaleString(DateTime.DATE_FULL);
};

export { displayClock, displayDate, createFragments };
