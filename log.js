
function log(name,...values){
  console.groupCollapsed(name);
  values.map(value => console.log(value));
  console.groupEnd();
}
