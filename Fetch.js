document.querySelector('#fth').addEventListener('click',loadREST);
function loadREST()
{
    console.log("AMI jani na");
    fetch('https://picsum.photos/list')
    .then(function(res)
    {
        return res.json();
    })
    .then(function(data)
    {
        let html='';
        let cnt=0;
        console.log(data[0]);
        data.forEach(function(element){
            html+=`
             <li>
              <b>${cnt=cnt+1}. 
              Author Name:</b>${element.author}
              <a target="_blank" href="${element.post_url}">View Image</a> 
             </li>
              
            `;
        });
        document.querySelector("#write").innerHTML=html;
    })
    .catch(function(err)
    {
        console.log(err.message);
    })
}

