import React from 'react'

const TypescriptRoot = () => {

//UNION TYPES
let stringOrNumber: string | number
let arrayWithStringAndNumber : (string | number)[]
arrayWithStringAndNumber = [1, "Hello"]

  //FUNCTION THAT RETURNS ONLY STRING
  let funcReturnString = ():string => "Hello"
// FUNCTION THAT TAKES NUMBER ARGUMENT, AND WILL RETURN NUMBER
  function multiplyNum( num: number ):number{ return num * 2 }

//// INTERFACES
// Extend
interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IEmployee = {
  username: "tom",
  email: "tom@gmail.com",
  age: 43,
  employeeId: 1,
};

const client: IUser = {
  username: "tom",
  email: "tom@gmail.com",
  age: 43,
};



  return (
    <div>Check code abovode</div>
  )
}

export default TypescriptRoot

