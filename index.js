document.addEventListener("DOMContentLoaded", function() {
    const movieTitle = document.getElementById("movieTitle");
    const iWant = document.getElementById("iWant");
    const dateRes = document.getElementById("dateRes");
    const submitDate = document.getElementById("submitDate");
    const resultSs = document.getElementById("resultSs");
    const resultSsD = document.getElementById("resultSsD");
    const result = document.getElementById("result");
    const yesChoice = document.getElementById("yesChoice");
    const noChoice = document.getElementById("noChoice");
    const yesChoiceTwo = document.getElementById("yesChoiceTwo");
    const noChoiceTwo = document.getElementById("noChoiceTwo");
    const goBack = document.getElementById("goBack");
    const goBack2 = document.getElementById("goBack2");
    const secondWindowY = document.getElementById("secondWindowY");
    const secondWindowN = document.getElementById("secondWindowN");
    const thirdWindow = document.getElementById("thirdWindow");
    const thirdWindowY = document.getElementById("thirdWindowY");
    const thirdWindowN = document.getElementById("thirdWindowN");

    
    yesChoice.addEventListener("click", event => {
        document.getElementById('firstWindow').style.display = 'none';
        document.getElementById('secondWindowY').style.display = 'flex';
    });

    noChoice.addEventListener("click", event => {
        document.getElementById('firstWindow').style.display = 'none';
        document.getElementById('secondWindowN').style.display = 'flex';
    });

    goBack.addEventListener("click", event => {
        document.getElementById('secondWindowN').style.display = 'none';
        document.getElementById('firstWindow').style.display = 'flex';
    });

    iWant.addEventListener("click", event => {
        if(movieTitle.value == ""){
            document.getElementById('secondWindowY').style.display = 'flex';
        } else {
            resultSs.innerHTML = movieTitle.value;
            document.getElementById('secondWindowY').style.display = 'none';
            document.getElementById('thirdWindow').style.display = 'flex';
        }
    });

    yesChoiceTwo.addEventListener("click", event => {
        document.getElementById('thirdWindow').style.display = 'none';
        document.getElementById('thirdWindowY').style.display = 'flex';
    });

    noChoiceTwo.addEventListener("click", event => {
        document.getElementById('thirdWindow').style.display = 'none';
        document.getElementById('thirdWindowN').style.display = 'flex';
    });

    goBack2.addEventListener("click", event => {
        document.getElementById('thirdWindowN').style.display = 'none';
        document.getElementById('thirdWindow').style.display = 'flex';
    });

    submitDate.addEventListener("click", event => {
        if(dateRes.value == ""){
            document.getElementById('thirdWindowY').style.display = 'flex';
        } else {
            resultSsD.innerHTML = dateRes.value;
            document.getElementById('thirdWindowY').style.display = 'none';
            document.getElementById('result').style.display = 'flex';
        }
    })
});
