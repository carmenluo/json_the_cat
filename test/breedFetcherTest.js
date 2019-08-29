const {fetchBreedDescription} = require('../breedFetcher');
const {assert} =require('chai');

describe('fetchBreedDescription', ()=>{
  it('returns a string description for a valid breed, via callback',(done)=>{
    fetchBreedDescription('Siberian',(err,des)=>{
      assert.equal(err,null);
      const expectedResult = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      assert.equal(expectedResult, des);
      done();
    })
  });
  it('returns a string description for a valid breed, via callback',(done)=>{
    fetchBreedDescription('1',(err,des)=>{
      assert.equal(err,null);
      const expectedResult = "the breed not found";
      assert.equal(expectedResult, des);
      done();
    })
  })
})