// money diposite js

function total(value1,value2){
    const dipositeFild=document.getElementById(value1);
    const postAmaunt=parseFloat(dipositeFild.value);

    const dipositeAmaunt=document.getElementById(value2);
    const preAmaunt=parseFloat(dipositeAmaunt.innerText);
    const totalAmaunt=parseFloat(preAmaunt+postAmaunt);
    dipositeAmaunt.innerText=totalAmaunt;
    // const dBelance=document.getElementById(value3);
    // dBelance.innerText=totalAmaunt;
    dipositeFild.value='';
    return dipositeAmaunt;
}
function additonSub(value3){
    debugger;
    const totalblanec=total('diposite_input','diposite_money'); 
    const dBelance=document.getElementById(value3);
    dBelance.innerText=totalblanec;
    return dBelance;

}

document.getElementById('diposite_btn').addEventListener('click',function(){
        total('diposite_input','diposite_money');
         additonSub('total_belance');

   
})
//money withdraw section
document.getElementById('withdraw_btn').addEventListener('click',function(){

    // give input value
    const widthdrawFild=document.getElementById('withdraw_input');
    const postAmauntwithdraw=parseFloat(widthdrawFild.value);
    
    // give carent value
    const withdrawAmaunt=document.getElementById('total_withdraw');
    const preAmauntwithdraw=parseFloat(withdrawAmaunt.innerText);

    // 1st and 2nd value sumation
    
    const totalAmauntwithdraw=parseFloat(preAmauntwithdraw+postAmauntwithdraw);
    withdrawAmaunt.innerText=totalAmauntwithdraw;

    // total belance sumation

    const Belance=document.getElementById('total_belance');
    
    const tbelance=parseFloat(Belance.innerText);
    const aBelance=tbelance-totalAmauntwithdraw;
    Belance.innerText=aBelance;
    
    
    
    widthdrawFild.value='';

   
})