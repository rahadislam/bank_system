function close(){
    document.getElementById('error').addEventListener('click',function(){
        document.getElementById('error').style.display='none';
    })
}

function calculetValue(num1,num2,issadd){
    const inputFild=document.getElementById(num1);
    const inputValue=parseInt(inputFild.value);

    const showFild=document.getElementById(num2);
    const showValue=parseInt(showFild.innerText);
    debugger
    if(inputValue >0){
    const totalValue=showValue+inputValue;
    showFild.innerText=totalValue;
    }
    else{
        document.getElementById('error').style.display='block';
        close();
    }
    const calculetFlid=document.getElementById('total_belance');
    const totalCalculetValue=parseInt(calculetFlid.innerText);
    if(issadd==true && inputValue >0){
     const intotalValue=totalCalculetValue+inputValue;
    calculetFlid.innerText=intotalValue;
    }
    else if(issadd==false && inputValue >0){
     const intotalValue=totalCalculetValue-inputValue;
    calculetFlid.innerText=intotalValue;
    }
    

    
    inputFild.value='';
}


//handel diposit
document.getElementById('diposite_btn').addEventListener('click',function(){
    
    calculetValue('diposite_input','diposite_money',true);
});
//handel withDraw 
document.getElementById('withdraw_btn').addEventListener('click',function(){
    
    calculetValue('withdraw_input','total_withdraw',false);
});