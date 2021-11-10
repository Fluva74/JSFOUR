const msgForm = document.querySelector("#msgForm");
const list = document.querySelector("#list");
msgForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newText = msgForm.elements.comment;
    const show = document.querySelector(".show");
    if (newText.value === "") {
        show.innerText = "Please Type Some Text";
        setTimeout(function() {
            show.innerText = "";
        }, 2000);
    } else {
        newComment(newText.value);
        newText.value = "";
    }
});

const newComment = (newText) => {
    const listText = document.createElement("li");
    listText.append(newText);
    list.append(listText);
};
