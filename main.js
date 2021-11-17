function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/qcmWSuPiG/model.json",modelready)
}

function modelready(){
    classifier.classify(gotResults);
}

function gotResults(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;

        document.getElementById("nameresult").innerHTML="I can Hear- " + result[0].label;
        document.getElementById("nameaccuracy").innerHTML="Accuracy- " + (result[0].confidence*100).toFixed(2)+" %"
        document.getElementById("nameaccuracy").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("nameresult").style.color="rgb("+random_r+","+random_g+","+random_b+")";

        img=document.getElementById("a1");
        img1=document.getElementById("a2");
        img2=document.getElementById("a3");
        img3=document.getElementById("a4");
         
        if(result[0].label=="Dog"){
            img.src="1.png";
            img1.src="https://gifimage.net/wp-content/uploads/2017/10/cute-transparent-gif-10.gif";
            img2.src="3.png";
            img3.src="https://cliply.co/wp-content/uploads/2020/10/392010140_GHOST_EMOJI_400.png";
        }
        else if(result[0].label=="Cat"){
            img.src="https://bestanimations.com/Animals/Mammals/Cats/cats/cute-kitty-animated-gif-25.gif";
            img1.src="2.png";
            img2.src="3.png";
            img3.src="https://cliply.co/wp-content/uploads/2020/10/392010140_GHOST_EMOJI_400.png"; 
        }

        else if(result[0].label=="Lion"){
            img.src="1.png";
            img1.src="2.png";
            img2.src="https://gifimage.net/wp-content/uploads/2018/04/lion-animated-gif-9.gif";
            img3.src="https://cliply.co/wp-content/uploads/2020/10/392010140_GHOST_EMOJI_400.png"; 
        }
         
        else{
            img.src="1.png";
            img1.src="2.png";
            img2.src="3.png";
            img3.src="https://i.gifer.com/3V1b.gif"; 
        }

    }

}