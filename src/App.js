import './App.css';

function App() {
  const users = [ 
   {name: "Sannasi",pic:"https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
   {name:"Dhojay",pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8sRArIlVuE7XuExjtOQoBVmq-_d1SPg5_Og&usqp=CAU"},
   {name:"Sanu",pic:"https://avatarfiles.alphacoders.com/125/125593.jpg"},
   {name:"Prabha",pic:"https://graphicriver.img.customer.envatousercontent.com/files/256493566/Queen+Crown_pw.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=d39ffecff1687fb44a764ae1b75b6f76"}, 
   {name:"Pearl",pic:"https://i.pinimg.com/736x/24/fb/a8/24fba8681acf5793630c1bca9dd65f2e.jpg"},
   ]
  return (
    <div className="App">

      {users.map((ur) =>(
       <Msg name={ur.name} pic={ur.pic} />
       ))}
          </div>
  );
}


function Msg ({name, pic}) {
  return (
    <div>
      <img className="user-pic" src={pic} alt={name} />
      <h1 className="user-name"> 🚴‍♂️ {name} 😊</h1>
    </div>
  );
}

export default App;


//jsx - Javascript xml