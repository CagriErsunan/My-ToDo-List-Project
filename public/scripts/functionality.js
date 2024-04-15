

var row = `<div class="line-flex">
<label class="container">
    <input type="checkbox">
    <span class="checkmark"></span>
  </label>
<textarea id="txt" name="txtarea" cols="50"></textarea>
</div>`;



$("#switch-mode").click(function(){
    
    $(".note.working").toggleClass("reveal");
    $(".note.daily").toggleClass("hide");

})

$("#mySvgWorking").click(function(){
    
    $("#myRow2").append(row);

})

$("#mySvgDaily").click(function(){
    
    $("#myRow").append(row);

})