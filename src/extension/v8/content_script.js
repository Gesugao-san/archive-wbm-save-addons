
function checkAllCheckboxes() {
  var inputs = this.document.querySelectorAll("input[type='checkbox']");
  for(var i = 0; i < inputs.length; i++) {
    inputs[i].checked = true;
  }
}

checkAllCheckboxes();
