
 import './Header.css';
// const Header1 = (props) =>{
//     return (
//         <header>
//         <h1>Hello, {props.title}</h1>
//         </header>
//         );
// }
const Header1=({title})=>{
    return (
                 <header>
                 <h1 style={headingStyle}>Hello {title}</h1>
                 <h2 className='h2Head'>Your way of doing</h2>
                 <h1 style={headingStyle}>Let's Learn {title.name}</h1>
                 <h3 id='h3Head'>H3 Heading </h3>
                 <button className="btn">Add</button>
                 </header>
                 );
}
const headingStyle={
    color:'darkcyan',
    backgroundColor:'lightblue',
    textAlign:'center'
}
Header1.defaultProps={
    title:"Task Tracker",
}
export default Header1;