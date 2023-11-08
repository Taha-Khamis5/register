function validateForm() {

const name = document.querySelector(".form-control").value;
const q1 = document.querySelector("#question-1").value;
const answerQ1 = document.querySelector("#answer1").value;
const q2 = document.querySelector("#question-2").value;
const answerQ2 = document.querySelector("#answer2").value;


if (name === "" || !isNaN(name) || q1 === "" || answerQ1 === "" || !isNaN(answerQ1) || answerQ2 === "" || !isNaN(answerQ2) || q2 === "") {
    alert("يرجي ادخال البيانات و التحقق من انها خاليه من الأرقام");
    return false;
} else{
    return true;
};

};

