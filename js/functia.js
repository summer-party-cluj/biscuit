/**
* @description Generate matrix for game
* @param {number} l - matrix length
*/

var x;

function readDim()
{
 x=prompt("Please enter the size!","5");

 while(x<5 || x>49)
  {
   x=prompt("Please enter the size!","5");
  }
 x = parseInt(x, 10);
}

function generateMatrix(l) 
{
 var mainEl,
 i,
 j,
 maxFor,
 horEl,
 horBorderEl,
 verEl,
 verBorderEl,
 borderWidth = 2,
 borderHeight = 6,
 el,
 cornerEl,
 elClass,
 posClass,
 rowNr,
 unavailableNr,
 availableNr,
 addAvailable,
 isVer = false;

 l = l || 5;
 if (l % 2 === 0) 
  {
   l = l + 1;
  }
 maxFor = l * 2 + 1;
 mainEl = document.getElementById("main");
 mainEl.style.width = (l * 20 + 4) + "px";
 mainEl.style.height = (l * 20 + 4) + "px";
 mainEl.innerHTML = "";
 horEl = document.createElement("DIV");
 for (i = 0; i < maxFor; i = i + 1) 
  {
   showNr = 3;
   availableNr = 0;
   addAvailable = false;
   if (i < l) 
    {
     rowNr = parseInt(i / 2, 10);
     unavailableNr = l - 1 - (2 * rowNr);
    } 
   else 
    if (i === l) 
     {
      unavailableNr = 0;
      showNr = 1;
     } 
    else 
     {
      rowNr = parseInt((i - 1) / 2, 10);
      unavailableNr = l - 1 - (2 * rowNr);
     }
   unavailableNr = Math.abs(unavailableNr);
   elClass = [];
   for (j = 0; j < maxFor; j = j + 1) 
    {
     el = document.createElement("DIV");
     elClass = [];
     posClass = [];
     if (i === 0) 
      {
       posClass.push("top");
      } 
     else 
      if (i === maxFor - 1) 
       {
        posClass.push("bottom");
       }
     if (j === 0) 
      {
       posClass.push("left");
      } 
     else 
      if (j === maxFor - 1) 
       {
        posClass.push("right");
       }
     if (i % 2 === 0) 
      {
       //this is horizontal
       isVer = false;
       if (j % 2 === 0) 
        {
         //corner
         elClass = ["corner"];
        } 
       else 
        {
         //line
         elClass = ["horLine"];
        }
      }
     else 
      {
       //this is vertical
       isVer = true;
       elClass = ["verLineSpace"];
       if (j % 2 === 0) 
        {
         elClass = ["verLine"];
        }
      }
     if (j === unavailableNr) 
      {
       availableNr = maxFor - 2 * (unavailableNr + showNr);
       if (isVer) 
        {
         availableNr = availableNr + 1;
        }
       addAvailable = true;
      }
     if (j < unavailableNr || j > maxFor - unavailableNr - 1) 
      {
       elClass.push("unavailable");
       addAvailable = false;
      }
     if (addAvailable && availableNr > 0)  
      {
       if (isVer) 
        {
         if (j > 0 && j < maxFor - 1 && j % 2 === 0 && unavailableNr + showNr <= j + 1 && maxFor - (unavailableNr + showNr) > j - 1) 
          {
           availableNr = availableNr - 1;
           elClass.push("available");
          }
        } 
       else 
        {
         if (j % 2 === 1 && unavailableNr + showNr <= j && maxFor - (unavailableNr + showNr) > j) 
          {
           availableNr = availableNr - 1;
           elClass.push("available");
          }
        }
      }
     elClass = elClass.concat(posClass);
     el.setAttribute("class", elClass.join(" "));
     mainEl.appendChild(el);
    }
  }
} 

readDim();
generateMatrix(x);