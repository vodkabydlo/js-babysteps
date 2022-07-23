function isIsogram(str){
  const array = str.toLowerCase().split("")
  const set = new Set(array)
  
  if(str=="") {
    return true
  }
  
  else if (set.size == array.length) {
    return true
  }
  else {
    return false 
  }
}