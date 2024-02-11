function saklar(action,lamp){
        // console.log('testing saklarnya...');
    // let lampu1 = document.getElementById("lampu1")
    // console.log(lampu1.src);
    // lampu1.src="asets/gambar/lampu on.png"
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    
if(action=="on"){
    if(lamp==1){
        lampu1.src="asets/gambar/lampu on.png"
    }
    if(lamp==3){
        lampu1.src="asets/gambar/lampu on.png"
    }
    if(lamp==3){
        lampu1.src="asets/gambar/lampu on.png"
    }
}
if(action=="off"){
    if(lamp==1){
        lampu1.src="asets/gambar/lampu off.jpg"
    }
    if(lamp==3){
        lampu1.src="asets/gambar/lampu off.jpg"
    }
    if(lamp==3){
        lampu1.src="asets/gambar/lampu off.jpg"
    }
}
        


            

}