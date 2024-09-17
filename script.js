function beforesubmit(){
    let inputdate = document.querySelector(".inputdate");
    let outputdate = document.querySelector(".outputdate");
    console.log("inputdate", inputdate.value);
    let formatedDate = new Date(inputdate.value).toLocaleDateString("en-US");
    outputdate.value = formatedDate;
}