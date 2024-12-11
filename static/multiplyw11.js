let num; // global hai vai


document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("submitBtn").addEventListener("click", submitAnswer);
    document.getElementById("nextBtn").addEventListener("click", generateQuestion);

    
    generateQuestion();
});

function generateQuestion() {
    num = Math.floor((Math.random() * 100) + 1);
    const question = `${num} x 11`;
    document.querySelector("#question").textContent = `What is ${question}?`;
}

function submitAnswer() {
    const realanswer = num * 11; 
    const useranswer = parseInt(document.getElementById("useranswer").value);

    // answer
    if (realanswer === useranswer) {
        document.querySelector("#result").textContent = `Correct! The answer is ${realanswer}`;
    } else {
        document.querySelector("#result").textContent = `Wrong. The answer is ${realanswer}. Check explanation  for clarity.`;
    }

    //exp
    const lastDigit = num % 10;
    const firstDigit = Math.floor(num / 10);
    const middleDigit = lastDigit + firstDigit;

    document.querySelector("#exp").textContent = 
        `Both first and second digits of the orginal number will be first and last digit number in the product.\n${firstDigit}_${lastDigit}.\nThe middle digit will be the sum of first and second digit = ${middleDigit}(if it is more than 10, the one gets carried and gets added to the first digit). Hence it is ${realanswer}`;

    // not working idk :sob:
    const answerCard = document.querySelector(".answercard");
    answerCard.style.display = "block";
   
}
useranswer.addEventListener('keyup', (e) => {
    if(e.keyCode===13){
        submitAnswer()
    }
}

)