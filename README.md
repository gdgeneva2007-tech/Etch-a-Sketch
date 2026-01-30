# Etch-a-Sketch
NOTES
***********************
1.prompt method:
eg:  let input=prompt("Enter the number of squares per side:",'16');
16 is the default input,the user can edit it or delete it
************************
2.the input is always a string. if you want to get a number,you need to :
num=Number(input);
then use the num
**********************
3.don't forget to check whether the input is null. if so, return.
*************************
4.how to randomize the color(rgb)?
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    div2.style.backgroundColor=`rgb(${r},${g},${b})`;
******************************
5.how to darken the color?
use the opacity property
eg  
let o=0;          (o stands for opacity. opacity ranges from 0 to 1.0. 0=>transparent 1=>solid)
o=o+0.1;
div2.style.backgroundColor=`rgb(${r},${g},${b},${o})`;     