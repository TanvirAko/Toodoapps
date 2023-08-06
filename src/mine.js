// select thes element
const sent=document.querySelector('.toodo_head span')
const toodoBody=document.querySelector('.toodo_boody')
let enty=['toodo','tood']
//get this function
const showToods=()=>{
    let enty=getData("data")
    let contint="";
    enty.reverse().map((item)=>{
        contint +=` <div class="toodoitem">
        <div class="toodo_content">
            <ul>
               
                <li>${item}</li>
            </ul>
           </div>
           <div class="toodo_delete"onclick="getdelete('${item}')" >
            <samp ><i class="fa-solid fa-trash"></i></samp>
           </div>
       </div>`


    })
    toodoBody.innerHTML=contint;
}

//get this onclick function
sent.onclick=()=>{
    const  val=document.querySelector('.toodo_head input').value;
    if(val){
        innserData("data",val)
        
        document.querySelector('.toodo_head input').value="";
    }
    else{
        alert("Sorry bro type your text")
    }
    showToods();
}
showToods();
//get data delete
const getdelete=(item)=>{
    let enty=getData("data")
   const ubgemty= enty.filter((data)=> data!==item);
   getdelet("data" ,ubgemty)
   showToods()
}