

function add(a,b,CallBack){
    
    CallBack(a+b)
}
function print(ans){
    console.log("Number is:",ans);
    ans=ans+1;
    setTimeout(()=>print(ans),2000);
    
}
print(0)