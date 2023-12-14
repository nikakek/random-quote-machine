import quotes from "./assets/quotes.json";
import logoWhite from "./assets/images/logo-white.png"
import React, { useEffect } from "react";
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

    function changeText() {
        let newQuote = "";
        let newAuthor = "";
        const makeNewQuote = () => {
            const randomNum = Math.floor(Math.random() * quotes.length);
            newQuote = quotes[randomNum].quote
            newAuthor = quotes[randomNum].author
        }
        makeNewQuote();
        document.getElementById("text").textContent = newQuote,
        document.getElementById("author").textContent = newAuthor
    }

    function handleTweet() {
        const tweetText = encodeURIComponent(`"${document.getElementById("text").textContent}" - ${document.getElementById("author").textContent}`);
        const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
        window.open(tweetUrl, '_blank');
      }
    

    function handleClick(){
        changeColor();
        changeText();
    }

    return(
        <section id="quote-box">
            <h1 id="text">Life isn’t about getting and having, it’s about giving and being.</h1>
            <p id="author">Kevin Kruse</p>
            <nav id="links">
                <a href="twitter.com/intent/tweet" id="tweet-quote" onClick={handleTweet}><img src={logoWhite} alt="" id="logo"/> </a>
                <button id="new-quote" onClick={handleClick}>New quote</button>
            </nav>
        </section>
    );
}

export default Card