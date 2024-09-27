

import './App.css'
import SecondComponents from './components/SecondComponents'
// import First from './components/First'
import ThirdComponent from './components/ThirdComponent'

// const student={
//   name: "rakib",
//   roll: "123456",
//   dept: "CSE",
//   courses:['DBMS',"CS",'CP']
// }
const products=[
  {
    id:1,
    name:"asus",
    price:"120000",
    details:<SecondComponents/>
  },
  {
    id:2,
    name:"hp",
    price:"60000",
    details:<SecondComponents/>
  },
  {
    id:3,
    name:"dell",
    price:"90000",
    details:<SecondComponents/>
  }
]


// import SecondComponents from './components/SecondComponents'
// function pass(){
//   return "passed a function through a component";
// }
function App() {

// const fruits=['apple','banana','mango'];
  return (
    <>
      {/* <h2>hi from frontend</h2>
      // <First name="rakib" comment="felling sleepy" emoji="😊❤️😒" fruits></First> */}
      {/* <First pass={pass} components={<SecondComponents />} /> */}

        {/* <First productInfo={products}></First> */}

      {/* <SecondComponents></SecondComponents> */}

      <ThirdComponent productInfo={products}></ThirdComponent>
    </>
  )
}

export default App
