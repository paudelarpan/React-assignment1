import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
const App = () => {
  return (
    <>
    <Header />
    <Body product="Pen" category="Stationery" price="30" 
    description="Our pencil: reliable, high-quality, and stylish. Perfect for all your writing needs."
    productimage="https://media.istockphoto.com/id/1059543698/photo/pen.jpg?b=1&s=170667a&w=0&k=20&c=zdwg04IxA_8ugZTzC_fInM2r0E6bVKvtCBRWv0O2_ps="/>
    <Body product="Eraser" price="20" category="Stationery" 
    description="Our eraser: top-quality, precise, and portable. The perfect tool for a clean and polished finish."
    productimage="https://media.istockphoto.com/id/509673010/photo/eraser-school-education.jpg?b=1&s=612x612&w=0&k=20&c=tg8u32X3pqBqjAN91nhgF2GhsjBvi__O35WTsecR9GQ=" />
   
    
    </>
  );
};


export default App;