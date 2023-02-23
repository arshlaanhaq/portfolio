console.log("scriptrunning//.....")
document.querySelector('.cross').style.display = "none";
document.querySelector('.hamburger').addEventListener("click" ,()=>{
    document.querySelector('.navbr').classList.toggle('navbrGo');
    if(document.querySelector('.navbr').classList.contains('navbrGo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        document.querySelector('.ham').style.display='none';
        setTimeout(() => {
            document.querySelector('.cross').style.display='inline';
            
        }, 300);
    }
})