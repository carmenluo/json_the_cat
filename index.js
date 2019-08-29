const {fetchBreedDescription} = require('./breedFetcher');
const breed = process.argv.slice(2);
fetchBreedDescription(breed[0],(error,description)=>{
  if (error){
    console.log('Error fetch details:', error);
  }
  else{
    console.log(description);
  }
})