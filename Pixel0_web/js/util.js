async  function getAllProyects(){
    try {

        const response = await fetch("http://localhost:4000/api/auth/fetchProyects");
        const proyects = await response.json();
        return proyects;
        
    } catch (error) {
        console.log(error);
    }
}            

async function renderProyects(){


    const proyect = await getAllProyects();
    

    for(a = 0 ; a < proyect.proyects.length ; a++){

        let inner = 
                `<div class="proyect">

                 
                    
                    <h2>${proyect.proyects[a].proyect_name}</h2>
                    <div class="description hidden-xs hidden-md hidden-sm"> 
                        <p>${proyect.proyects[a].proyect_descr}</p>
                    </div>
                        <img src="/assets/2.JPG" alt="">
                        
                    
                    
                    
                </div>`
             
        
        var tarjeta = document.createElement("div");
        tarjeta.setAttribute("class","  col-xs-4 ");

        tarjeta.innerHTML=inner;
        
        document.getElementById("proyects").append(tarjeta);
        
    }


}


    renderProyects();



   const proyects = document.getElementsByClassName("proyect");

   console.log(proyects);