
function App() {

  return (
    <div style={{ background: '#dfe6e9', height: '100vh' }} >
      <div style={{ display: 'flex', justifyContent: 'center' }} >
        <div>
          <div>
            <PostComponent
              name={"Harsh"}
              followersCount={2600}
              time={"2m ago"}
              image={"https://lh3.googleusercontent.com/ogw/AF2bZyif6_6IwQq2KMKGsMlQmyMZFDyC8fblPGy8ss5B5eo3X98=s64-c-mo"}
              description={"Want to know how to win big? Check out hhow these folks won $6000 in bounties"}
             />
            <br />
          </div>
          <div>
            <PostComponent
              name={"raman"}
              followersCount={200}
              time={"3m ago"}
              image={"https://lh3.googleusercontent.com/ogw/AF2bZyif6_6IwQq2KMKGsMlQmyMZFDyC8fblPGy8ss5B5eo3X98=s64-c-mo"}
              description={"how to get hired in 2026 here are five ways in which you can get hired too"}
            />  
            <br />
          </div>
          <div>
            <PostComponent
              name={"sumit"}
              followersCount={100}
              time={"1m ago"}
              image={"https://lh3.googleusercontent.com/ogw/AF2bZyif6_6IwQq2KMKGsMlQmyMZFDyC8fblPGy8ss5B5eo3X98=s64-c-mo"}
              description={"Want to know how to win small? dont check out hhow these folks won $200 in bounties"}
            />  
            <br />
          </div>
        </div>

      </div>
    </div>
  )
}

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }

function PostComponent({image,followersCount,description,time}) {
  return (
    <div style={style} >

      <div style={{ display: "flex" }}>

        <img src={image} alt="logo" style={{
          width: 45,
          height: 45,
          borderRadius: 100
        }} />

        <div style={{ fontSize: 11, marginLeft: 10 }} >
          <b>
            {name}
          </b>
          <div>{followersCount} followers</div>
          <div style={{display:'flex'}} >
             <div>{time}</div>
             •
             <img src={"Rb0953XQ6Whp6UAQxAYGM9VlBS0WRRRxMDI2hrfAK9EUBERAREQEREBERAREQEREBERAREQFREQAcoURAwqoiAiIgIiICIiAiIgIiIP"} alt="clockimage"
             style={{width: 5, height:5}}/>
          </div>
        </div>
      </div>

      <div style={{ fontSize: 15 }}>
        {description}
      </div>


    </div>
  )
}

export default App
