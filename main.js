function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Jtykn6nQE/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults()
{
    if (error)
    {
        console.error(error);
        document.getElementById("error_div").innerHTML="Model Not Working Please Check Console!!!";
    }
    else
    {
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        console.log("Model Successfully Working");
    }
}