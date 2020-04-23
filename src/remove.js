export function remove_func() {
  //arr.pop();
  //arr.splice(arr.lenght-1);
  var y = document.getElementsByTagName('input').length;
  if ( y > 1 ) {
  //$("#div_id input:last").remove();
   $('#div_id br:last').remove();
   $('#k_id:last').remove();
  return false;
  }
}