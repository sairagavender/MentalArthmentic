let num; 

document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("submitBtn").addEventListener("click", submitAnswer);
    document.getElementById("nextBtn").addEventListener("click", generateQuestion);

    
    generateQuestion();
});

function generateNumbers(){
    const numbers = [];
    for (let i = 5; i <= 125; i += 10) {
        numbers.push(i);
    }
    return numbers;
}

function generateQuestion() {
    const answerCard = document.querySelector(".answercard");
    answerCard.style.display = "none";
    document.getElementById("useranswer").value = "";
    nums=generateNumbers();
    numIndex = Math.floor(Math.random() * nums.length);
    num=nums[numIndex]
    const question = `${num} x ${num}`;
    document.querySelector("#question").textContent = `What is ${question}?`;
}

function submitAnswer() {
    const realanswer = num * num; 
    const useranswer = parseInt(document.getElementById("useranswer").value);

    // answer
    if (realanswer === useranswer) {
        document.querySelector("#result").textContent = `Correct! The answer is ${realanswer}`;
    } else {
        document.querySelector("#result").textContent = `Wrong. The answer is ${realanswer}. Check explanation  for clarity.`;
    }

    //exp
    const lastDigit = 5;
    const firstDigit = Math.floor(num / 10);
    const firstDigitOfAnswer=Math.floor(realanswer/100)

    document.querySelector("#exp").textContent = `The last two digits will always be 25. Now the first digits of answer will be the product of digits of the original number brfore 5, which is ${firstDigit} and the number after those digits which is ${firstDigit+1}. So the first digits will be ${firstDigit} x ${firstDigit+1} = ${firstDigitOfAnswer}. Hence it will be ${realanswer}`
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