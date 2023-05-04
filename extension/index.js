window.onload=()=>{ document.getElementById("btns").onclick=showdata;
function showdata() {
    /*
    const fetchblog=async (topic)=>{
       const txt= await  fetch(`http://localhost:5000/blog/${topic}`,{
        mode:"cors",
        headers:{
            'Acsess-Control-Allow-Origin' : 'http://localhost:5000'
        }
        }).then((resp)=>{
            if(resp.ok) {
                resp.json().then(data=>console.log(data));
            } else {
                console.log("not ok");
                resp.json().catch(err=>console.log(err));
            }
        });
        document.querySelector("#resp").innerHTML=JSON.stringify(txt);
     };

     
     const fetchsummary=async (blog)=>{
         await fetch(`http://localhost:5000/blogsummary/${blog}`,{
             method:"GET",
             mode:'cors'
            }).then((resp)=>console.log(resp)).then(
             (data)=>{document.querySelector("#summ").innerHTML=data}).catch(err=>console.log(err));
     }
     
     let topic=document.querySelector("#prompt").value;
     console.log(`Topic: ${topic}`);
     
     (async ()=>{await fetchblog(topic)})();
     
     (async ()=>{await fetchsummary(document.querySelector("#resp").value)})();
     */

     let topic=document.getElementById("prompt").value;
     console.log(topic);
     
//      let blog=jQuery((`http://localhost:5000/blog/${topic}#blog`).replace(/ /g,"%20")).text();

   //  jQuery("#blog").attr("src",`http://localhost:8081/blog/${topic}`);
     //jQuery("#summ").attr("src",`http://localhost:8081/blogsummary?topic=${topic}`);

     document.querySelector("#blog").setAttribute("src",`http://localhost:8081/blog/${topic}`);
     document.querySelector("#summ").setAttribute("src",`http://localhost:8081/blogsummary?topic=${topic}`);
    
     
} 
}