var numSquares=6;
var colors = generateRandomColors(numSquares);
var squares= document.querySelectorAll(".square");
var pickedColor= pickColor();
var messageDisplay=document.querySelector("#message");
var colorDisplayRGB=document.getElementsByTagName("span")[0];
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");

init();

function init()
{
    setupModeButtons();
    setupSquares();
    reset();
}

function reset()
{
    colors=generateRandomColors(numSquares);
    resetButton.textContent="New Colors"
    messageDisplay.textContent="";
    pickedColor=pickColor();

    colorDisplayRGB.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i])
        {
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }else 
        {
            squares[i].style.display="none";
        }
     
    }
    h1.style.backgroundColor="steelblue";
}



resetButton.addEventListener("click",function()
{

    reset();
})

function changeColors(color)
{
    for(var i =0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}

function pickColor()
{
    var rand=Math.floor(Math.random()*colors.length)
    return colors[rand];
}

function generateRandomColors(num)
{
    // make array 
    var arr= [];
    // repeat num times 
    for (var i=0;i<num;i++){
    // get random color and push into arr 
    arr.push(randomColor());
    }
    return arr;
}

function randomColor()
{
    //pick red 
    var r=Math.floor(Math.random()*256);
    //pick green
    var g=Math.floor(Math.random()*256);
    //pick blue
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";

}
function setupModeButtons()
{
    for(var i=0; i<modeButtons.length;i++)
    {
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent==="Easy" ? numSquares=3: numSquares =6;
            reset();
        });
    }
}
function setupSquares()
{
    for(var i=0; i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
        
        squares[i].addEventListener("click",function()
        {
            var clickedColor = this.style.backgroundColor;
            if(clickedColor===pickedColor)
            {
                h1.style.backgroundColor=pickedColor;
                messageDisplay.textContent="Correct";
                changeColors(clickedColor);
                resetButton.textContent="Play Again?";
            }
            else
            {
                this.style.backgroundColor="#232323";
                messageDisplay.textContent="Try Again";
            }})
        }
}