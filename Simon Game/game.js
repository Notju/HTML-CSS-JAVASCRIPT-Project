let color=["red","blue","green","yellow"];

function nextSequence(){
    let randomnumber=parseInt(Math.random()*4);

    randomcolor=color[randomnumber];

  $(`#${randomcolor}`).fadeIn(200).fadeOut(200).fadeIn(200);
  musicplay(randomcolor);
}

$(".box").click(function () {
    
    let y=$(this).attr("id")
   

    musicplay(y);

    anime(y);
    
    
});


function musicplay(x){
    var music=new Audio(`./sounds/${x}.mp3`)
    music.play();
}

function anime(x){
    $("#"+x).addClass("pressed");
    setTimeout(()=>{
        $("#"+x).removeClass("pressed");
    },200)

}