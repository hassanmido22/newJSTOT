function submit(){
    let mister = document.getElementById('mister').checked;
    let miss = document.getElementById('miss').checked;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let card = document.getElementById('card').value;

    let values = new Array();

    if(mister){
        values.push(mister,name,email,password,card);
    }
    else{
        values.push(miss,name,email,password,card);
    }
    
    
    


}