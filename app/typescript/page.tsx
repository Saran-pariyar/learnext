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

// Interfaces are just advanced version of type. we can use extend feature in interface too

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

// GENERICS 
// we generally use <T> for generics but we can use anything. Now it will accept any kind of array
interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

//this is using IPostBetter interface which has Generics
//now it is accepting string array too.
const testMe: IPostBetter<string> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: ["str", "str2"],
};


// now we can accept any object here
interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

// we specified the id inside object should be number here now
const testMe2: IPostEvenBetter<{ id:number }> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1 }],
};








  return (
    <div>Check code abovode</div>
  )
}

export default TypescriptRoot

