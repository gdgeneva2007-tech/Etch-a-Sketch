const container=document.querySelector('div');
let num=16;

function grid(num){
    for(let i=1;i<=num;i++){
        const div1=document.createElement('div');
        div1.style.cssText="display:flex;flex:1";
        for(let j=1;j<=num;j++){
            const div2=document.createElement('div');
            div2.style.cssText="display:flex;flex:1;border:2px solid";
            let o=0;
            div2.addEventListener('mouseenter',()=>{
                o=o+0.1;
                let r=Math.floor(Math.random()*256);
                let g=Math.floor(Math.random()*256);
                let b=Math.floor(Math.random()*256);
                div2.style.backgroundColor=`rgb(${r},${g},${b},${o})`;
                div2.style.opacity+=10;
            });
            div1.appendChild(div2);
        }
        container.appendChild(div1);
    }
}
grid(num);
const button=document.querySelector('button');
button.addEventListener('click',pop);
function pop(){
    
    do{
        let input=prompt("Enter the number of squares per side:",'16');
        if(!input){
            return;
        }
        num=Number(input);
    }while(!(Number.isInteger(num)&&num>=1&&num<=100));
    

    container.replaceChildren();
    grid(num);
    
}
