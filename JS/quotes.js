const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다",
        author:"키케로",}, 
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
        author:"사무엘존슨",    
        },
    {
        quote: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다",
        author:"제임스 오펜하임",
    },
    {
        quote: "You want to be rich and anonymous, not poor and famous",
        author:"Naval Ravikant", 
    },
    {
        quote: "Life is the tragedy when seen in close-up, but a comedy in long-short",
        author:"Charlie Chaplin",
    },
    {
        quote: "Life isn't matter of milestones, but of moments",
        author:"Rose Kenndy", 
    },
    {
        quote: "Life is a long lesson in humility",
        author:"James M. Barrie", 
    },
    {
        quote: "Do not mind anything that anyone tells you about anyone else. Judge everyone and everthing for yourself",
        author:"Henry James", 
    },
    {
        quote: "No act of kidness no matter how small, is ever wasted",
        author:"Aesop", 
    },
    {
        quote: "It is far better to be alone, than to be in bad company",
        author:"George Washington", 
    },    
 
] ;

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;