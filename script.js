document.addEventListener("DOMContentLoaded" , () => {
    document.querySelector('#subscribe').disabled =true;

    document.querySelector('#input').onkeyup, ()=>{
    
        if(document.querySelector('#input').value.length > 0){
          
            document.querySelector('#subscribe').disabled =false;
        }
        else{
            document.querySelector('#subscribe').disabled =true;
        }

    };


});