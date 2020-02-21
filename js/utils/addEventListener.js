export const addEventListener =()=>{
    const container =document.getElementById('human')
     container.addEventListener('click', fireClick);
}

const fireClick =(event)=>{
   console.log(event)
}