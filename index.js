// Write your solution here!
const cats = ["Milo","Otis", "Garfield"]

  function destructivelyAppendCat(name){
    cats.push(name);

  }


  function destructivelyPrependCat(name){
    cats.unshift(name);
  }
  function destructivelyRemoveLastCat(){

    cats.pop();
  }

  function destructivelyRemoveFirstCat(){
    cats.shift(); 
  }

   function appendCat(name){
    let newcatslist=[...cats, name]
    return newcatslist
   }
   
  function prependCat(name){
    let newcatlist2=[name, ...cats]
    return newcatlist2
  }

  function removeLastCat(){
    let newcatlist3=[...cats]
   newcatlist3.pop()
   
    return newcatlist3

  }

  function removeFirstCat() {
    let newcatlist4=[...cats]
    newcatlist4.shift()
    return newcatlist4
  }