const cats=["Milo", "Otis", "Garfield"]

 function destructivelyAppendCat(){

cats.push("Ralph");

 }


 function destructivelyPrependCat(name){

cats.unshift("Bob",);
 }




 function destructivelyRemoveLastCat(){

cats.pop("Garfirld");

 }

 function destructivelyRemoveFirstCat(){

cats.shift("Milo");
 }



  function appendCat(){

const copyofcats=[...cats, "Broom"];

return copyofcats;
  
}



function prependCat(name){
const copyofcats=["Arnold",...cats]
return copyofcats;



}



function removeLastCat(){

  const cats=["Milo", "Otis", "Garfield"]
  const copyofcats= cats.slice(0,2);
  return copyofcats;




}

function removeFirstCat(){
  const cats=["Milo", "Otis", "Garfield"]
 const copyofcats=cats.slice(1);
 return copyofcats;

}
