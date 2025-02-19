let search=document.getElementById('searchInput');
function create(result){
    let div=document.createElement("div");
    div.classList.add("result-item");
    let title=document.createElement("a");
    title.href=result["link"];
    title.textContent=result["title"];
    title.target="_blank";
    title.classList.add("result-title");
    div.appendChild(title);
    let para=document.createElement("p");
    para.textContent=result["description"];
    para.classList.add("link-description");
    div.appendChild(para);
    let link=document.createElement("a");
    link.href=result["link"];
    link.textContent=result["link"];
    link.target="_blank";
    link.classList.add("result-url");
    div.appendChild(link);
    let resultContainer=document.getElementById("searchResults");
    resultContainer.appendChild(div);
}
function displayResults(results){
    document.getElementById("searchResults").innerHTML="";
    for (let i=0;i<results.length;i++){
        create(results[i]);
    }
    document.getElementById('spinner').classList.add("d-none");
}
function output(event){
    if (event.key ==="Enter"){
        document.getElementById('spinner').classList.remove("d-none");
        let input=search.value;
        let option={
            method:"GET"
        };
        fetch("https://apis.ccbp.in/wiki-search?search="+input,option)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            let results=jsonData["search_results"];
            console.log(jsonData);
            displayResults(results);
        });
    }
}
search.addEventListener("keydown",output);