//week 4 day 
const minusOne = (num) => {
    console.log(num - 1); {
   }
}
minusOne(5);

function makeSentence(par1,par2,par3){
    return par1+par2+par3;
  }
  console.log(makeSentence('I ','want ','ice cream'));

function makeSentence(...par){
    const sentence = par.join(" "); {
}
    return sentence;
}

console.log(makeSentence("Angela", "likes", "dogs", "."));

const getLastElement = function(parArray){
    let lastElement = parArray[parArray.length-1];
    console.log(lastElement);
}
getLastElement(["1", "2", "3"]);
