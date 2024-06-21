
function checkAllCheckboxes() {
  var inputs = this.document.querySelectorAll("input[type='checkbox']");
  for(var i = 0; i < inputs.length; i++) {
    inputs[i].checked = true;
  }
}

function reddenPage() {
  document.body.style.backgroundColor = 'red';
}

if (!tab) {return;}
if (!tab.url) {return;}
if (!tab.url.includes('https://web.archive.org/save')) {
  checkAllCheckboxes()
  reddenPage()
  return;
}
