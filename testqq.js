document.onkeydown = keydown;

function keydown(evt){
  if (!evt) evt = event;

  if (evt.ctrlKey && evt.altKey && evt.keyCode==70){ // Ctrl + command + f
    console.log("Check skip !");
    
    let ytpSkipper = document.getElementsByClassName("ytp-ad-skip-button")[0];
    if(ytpSkipper){
        ytpSkipper.click();
        console.log("Skip !!!");
    };
  };
}