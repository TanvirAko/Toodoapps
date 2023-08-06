//get dfata local strozer
const getData=(key) =>{
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key));
    }else{
        return [];
    }
}
//get innser data
const innserData=(key,data)=>{
    let lsemty=[];
    if(localStorage.getItem(key)){
        lsemty=JSON.parse(localStorage.getItem(key));
    }
    //data push
    lsemty.push(data);
    //return data
    localStorage.setItem(key,JSON.stringify(lsemty));
}
//get data delete
const getdelet=(key,data)=>{
    localStorage.setItem(key,JSON.stringify(data));
}
