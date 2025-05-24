const WinnerOverlay = document.getElementById("overlay-container")
let Lose = localStorage.getItem("lose");
let Wins = localStorage.getItem("wins");

function PlayGame(playerChoice)
{
    const Choices = ["Scissors","Stone","Paper"];
    let compChoice = Choices[Math.floor(Math.random() * Choices.length)];
    let result;

    if (playerChoice === compChoice) result = "Ничья";
    else if (
      (playerChoice === 'Stone' && compChoice === 'Scissors') ||
      (playerChoice === 'Scissors' && compChoice === 'Paper') ||
      (playerChoice === 'Paper' && compChoice === 'Stone')
    ) {
      result = "Вы победили!";
      Wins++;
      localStorage.setItem("wins",Wins)
      document.getElementById("Wins").textContent =
            `Выйгрышей: ${Wins}`
    } else {
      result = "Компьютер победил!";
        Lose++;
        localStorage.setItem("lose",Lose)
        document.getElementById("Lose").textContent =
            `Проигрышей: ${Lose}`
    }
     document.getElementById('WinnerText').textContent =
      `You: ${playerChoice}, Computer: ${compChoice}. ${result}`;

    console.log(result,compChoice)
    function showPopup() {
      WinnerOverlay.style.display = "block";
      console.log("Оверлей")
    }
    showPopup()
}

function ExitOverlay()
{
  WinnerOverlay.style.display = "none";
}