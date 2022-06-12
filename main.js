let frontWall = document.querySelector('.frontWall');
let leftWall = document.querySelector('.leftWall');
let rightWall = document.querySelector('.rightWall');
let floor = document.querySelector('.floor')
let content = document.querySelector('.content');

function mouse_position(event){
    let x = event.clientX;  
    let x_deg =  (-(screen.width/2) + x) * (20/screen.width) + 'deg';
    let rotateY = 'rotateY' + '(' + x_deg + ')';
    
    content.style.transform = rotateY;
};


function Counter(n){
    let counter = 0;
    for(let i = 0; i = n; 1++){
       counter++;
    }
}

