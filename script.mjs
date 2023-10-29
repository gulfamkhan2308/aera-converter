function marla(event){
    console.log("button active");
    event.preventDefault();

    let inp= document.querySelector("#marlaInput").value;
    let result= inp*272;
    let massage= "area in square feet "+ result;
    document.querySelector("#result").innerHTML= massage;

}
