const loadAi = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    // console.log(data)
    const allAi = data.data;
    displayAi(allAi);
}



const displayAi = allAi =>{
    const aiContainer = document.getElementById('ai-container');

    console.log(allAi);
    // console.log(allAi.tools)
    let tools = allAi.tools;
    
    const showAllBtn = document.getElementById('show-all');

    if(tools.length > 10){
        showAllBtn.classList.remove('hidden');
    }
    else{
        showAllBtn.classList.add('hidden');
    }
    tools.forEach(tool => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card  bg-base-100 shadow-xl ">
        <figure><img src=${tool.image} alt="Shoes" /></figure>
        <div class="card-body text-left">
          <h3 class="card-title">
            Features
            
          </h3>
          <ol  class="list-decimal">
            <li>Natural language processing</li>
            <li>Contextual understanding </li>
            <li>Text generation</li>
          </ol>
          <hr>
          <h3 class="text-black text-2xl font-semibold text-left">${tool.name}</h3>
          <div class="flex gap-3">
            <img src="images/Frame.svg" alt="">
            <p>11/01/2022</p>
          </div>
        </div>
        `
        aiContainer.appendChild(div);

        
       
    });
    
  
}


const shortByHandler = () =>{
    loadAi();
}

// loadAi()
