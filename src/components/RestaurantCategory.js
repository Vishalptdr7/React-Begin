const RestautantCategory=(data)=>{
    console.log(data)
return (
    
    <div>
        <div className=" bg-white shadow-lg p-4 ">
            <span>{data.title}</span>
            <span className="absolut">🔽 </span>
        </div>
        <h1>Hello I am Props</h1>
        
    </div>
 
)
}
export default RestautantCategory;