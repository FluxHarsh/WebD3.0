import { useState } from "react";
import { PostComponent } from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.title}
    image={post.image}
    description={post.description}
  />)

  function addPost() {
    setPosts([...posts, {
      name: "harkirat",
      subtitle: "10000 followers",
      time: "2m ago",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "What to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }

  return (
    <div style={{background: "#dfe6e9", height: "100vh", }}>
      <button onClick={addPost}>Add post</button>
      <div style={{display: "flex", justifyContent: "center" }}>
        <div>
          {postComponents}
        </div>
      </div>
    </div>
  )
}

export default App








// Components

// const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }

// function PostComponent({image,subTitle,description,time,name}) {
//   return (
//     <div style={style} >

//       <div style={{ display: "flex" }}>

//         <img src={image} alt="logo" style={{
//           width: 45,
//           height: 45,
//           borderRadius: 100
//         }} />

//         <div style={{ fontSize: 11, marginLeft: 10 }} >
//           <b>
//             {name}
//           </b>
//           <div>{subTitle} </div>
//           { time !== undefined && <div style={{display:'flex'}} >
//              <div>{time}</div>
//              •
//              <img src={"Rb0953XQ6Whp6UAQxAYGM9VlBS0WRRRxMDI2hrfAK9EUBERAREQEREBERAREQEREBERAREQFREQAcoURAwqoiAiIgIiICIiAiIgIiIP"} alt="clockimage"
//              style={{width: 5, height:5}}/>
//           </div>}
//         </div>
//       </div>

//       <div style={{ fontSize: 15 }}>
//         {description}
//       </div>


//     </div>
//   )
// }

// <div style={{ display: 'flex', justifyContent: 'center' }} >
//         <div>
//           <div>
//             <PostComponent
//               name={"Harsh"}
//               subTitle={"2600 followers"}
//               time={"2m ago"}
//               image={"https://lh3.googleusercontent.com/ogw/AF2bZyif6_6IwQq2KMKGsMlQmyMZFDyC8fblPGy8ss5B5eo3X98=s64-c-mo"}
//               description={"Want to know how to win big? Check out hhow these folks won $6000 in bounties"}
//              />
//             <br />
//           </div>
//           <div>
//             <PostComponent
//               name={"raman"}
//               subTitle={"Promoted ad"}
// // Conditional rendering not showing time divv
//               image={"https://lh3.googleusercontent.com/ogw/AF2bZyif6_6IwQq2KMKGsMlQmyMZFDyC8fblPGy8ss5B5eo3X98=s64-c-mo"}
//               description={"how to get hired in 2026 here are five ways in which you can get hired too"}
//             />  
//             <br />
//           </div>
//         </div>

//       </div>

