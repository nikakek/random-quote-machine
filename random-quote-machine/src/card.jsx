import quotes from "./assets/quotes.json";
function Card(){
    function changeColor(){
        const randomColor = () => {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            return `rgb(${red}, ${green}, ${blue})`;    
        }
        let color = randomColor();
        return(
            document.getElementById("new-quote").style.backgroundColor = color,
            document.getElementById("text").style.color = color,
            document.getElementById("author").style.color = color,
            document.getElementById("tweet-quote").style.backgroundColor = color,
            document.getElementById("body").style.backgroundColor = color
        );
    }

    function handleClick(){
        changeColor();
        changeText();
    }

    return(
        <section id="quote-box">
            <h1 id="text">abcdefghigjlmnopqrstuvwxyztd</h1>
            <p id="author"> Confucius</p>
            <nav id="links">
                <a href="twitter.com/intent/tweet" id="tweet-quote">  </a>
                <button id="new-quote" onClick={handleClick}>New quote</button>
            </nav>
        </section>
    );
}

export default Card