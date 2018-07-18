const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', ()=>{//callback function
    var res=utils.add(33,11);
    /*if(res!==44){
        throw new Error(`Expected 44 but got ${res}.`)
    }*/
    
    //Remplacer par l'instruction ci-dessous en utilisant expect
    expect(res).toBe(44);//.toBeA('number');
});

it('should async add two numbers', (done) => {

    utils.asyncAdd(4, 3, (sum) => {
      
  expect(sum).toBe(7).toBeA('number');
      
  done();
    });
  });
  
  
  it('should square a number', () => {
   
   var res = utils.square(3);
  
    expect(res).toBe(9).toBeA('number');
  });
  
  
  it('should async square a number', (done) => {
   
   utils.asyncSquare(5, (res) => {
      expect(res).toBe(25).toBeA('number');
      done();
    });
  });
  
  // should verify first and last names are set
  // assert it includes firstName and lastName with proper values
  it('should set firstName and lastName', () => {
    var user = {location: 'Philadelphia', age: 25};
    var res = utils.setName(user, 'Andrew Mead');
  
    expect(res).toInclude({
      firstName: 'Andrew',
      lastName: 'Mead'
    });
  });
  
  // it('should expect some values', () => {
  //   // expect(12).toNotBe(12);
  //   // expect({name: 'bibata'}).toNotEqual({name: 'Bibata'});
  //   // expect([2,3,4]).toExclude(1);
  //   expect({
  //     name: 'Bibata',
  //     age: 25,
  //     location: 'Montreal'
  //   }).toExclude({
  //     age: 23
  //   })
  // });
  