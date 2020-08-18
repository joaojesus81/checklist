const unorderedList = document.getElementById("checklist");
let lTags = unorderedList.childNodes;
const submitButton = document.getElementById("submit-button");

const changeStatus = (event) => {
  event.target.id === "unchecked-item"
    ? (event.target.id = "checked-item")
    : (event.target.id = "unchecked-item");
};

lTags.forEach((item) => {
  console.log(item);

  item.addEventListener("click", changeStatus);
});

const submitForm = () => {
  const inputBox = document.querySelector("input");
  const inputText = inputBox.value;
  if (inputText !== "") {
    const newListItem = document.createElement("li");
    const currentDate = formatTime();
    const newText = document.createTextNode(
      `${inputText} . Due date: ${currentDate}`
    );
    newListItem.appendChild(newText);
    newListItem.setAttribute("id", "unchecked-item");
    newListItem.addEventListener("click", changeStatus);
    document.getElementById("checklist").appendChild(newListItem);
    inputBox.value = "";
  }
};

submitButton.addEventListener("click", submitForm);

const formatTime = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentDate = Date.now();
  const date = new Date(currentDate);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate() >= 10 ? date.getDate() : "0" + date.getDate();
  const convertedTimeStamp = `${day}-${month}-${year}`;
  return convertedTimeStamp;
};
