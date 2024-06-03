const guessing_number_form_container = document.querySelector(".guessing-number-form-container");
const guess_number_input = document.querySelector(".guess-number-input");

const winning_message = document.querySelector(".winning-message");
const winning_number = document.querySelector(".winning-number");

const play_again_button = document.querySelector(".play-again-button");
const retry_button = document.querySelector(".retry-button");

const guess_button = document.querySelector(".guess-button");

const number_of_guesses = document.querySelector(".number-of-guesses")
let total_numberOfGuesses = 5;

let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);

guessing_number_form_container.addEventListener("submit",(event)=>{
    if(guess_number_input.value === ''){
        alert('Please enter a value')
        window.location.reload()
    }
    if(total_numberOfGuesses > 1){
        total_numberOfGuesses -= 1;
    }else{
        total_numberOfGuesses -= 1;
        alert("Your guessing tries is out. Please try is again");
    }

    if(Number(guess_number_input.value) > randomNumber){
        alert("Too high")
    } else if(Number(guess_number_input.value) < randomNumber){
        if(total_numberOfGuesses > 1 || total_numberOfGuesses !== 0){
            alert("Too low")
        }else{
            winning_message.textContent = "Try again"
            winning_number.textContent = `Winning number was is: ${randomNumber}`;
            retry_button.style.display = "block";
        }
    }else{
        winning_message.textContent = "Yayy. You won!"
        winning_number.textContent = `Winning number is: ${randomNumber}`
        play_again_button.style.display = "block"
    }

    if(total_numberOfGuesses === 0){
        guess_button.setAttribute("disabled","")
    }
    

    number_of_guesses.textContent = `Your total number of guesses is ${total_numberOfGuesses}`
    event.preventDefault();
})

play_again_button.addEventListener("click",()=>{
    window.location.reload();
})

retry_button.addEventListener("click",()=>{
    window.location.reload();
})



