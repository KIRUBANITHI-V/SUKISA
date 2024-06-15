import axios from "axios"

function Login(){
    const handlePhoto = (e) => {
        e.preventDefault()
        let photo = document.getElementById("photo").value
        let key = {
            photo : photo
            
        }
        if(photo === ""){
           alert("enter your photo")
        }
        else{
            axios.post("http://localhost:3456/upload",key)
            .then((res)=>{
                if(res.data.Status === "uploaded"){
                    alert("Uploaded")
                }
                else{
                    alert("Not uploaded")
                }
            })
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        let name = document.getElementById("name").value
        let age = document.getElementById("age").value
        let gender = document.getElementById("gender").value
        let number = document.getElementById("number").value

        let key = {
            name : name,
            date_of_birth : age,
            gender : gender,
            number : number
        }
        if(name === ""){
            alert("enter your name")
        }
        else if(age===""){
            alert("enter your age")
        }
        else if(gender==="") {
            alert("enter your gender")
        }
        else if(number===""){
            alert("enter your number")
        }
        else {
            axios.post("http://localhost:3456/login",key)
            .then((res)=>{
                console.log(res)
                if(res.data.Status === "inserted"){
                    alert("inserted")
                    window.location.href = "/view"
                }
                else{
                    alert("not inserted")
                }
            })
        }
    }

    const handleAdmin = (e)=>{
       let Adminname = document.getElementById("adminname").value
       let password = document.getElementById("password").value
         if(Adminname ==="sukisa"){
            if(password === "9876"){
                alert("login successfull")
            }
            else{
                alert("invalid password")
            }
         }
         else{
            alert("invalid Admin name")
         }
            
    }

    return(
        <>
         <form onSubmit={handlePhoto}>
            <label for="photo">Upload a photo:</label>
            <input type="file" id="photo" name="photo" accept="image/*"/>
            <input type="submit" value="Upload"/><br/><br/>
        </form>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" id="name"/><br/><br/>
            <input type="date" placeholder="age" id="age"/><br/><br/>
            <input type="text" placeholder="gender" id="gender"/><br/><br/>
            <input type="text" placeholder="number" id="number"/><br/><br/>
            <button type="submit">hit</button>
        </form>
        <h1>Admin</h1>
             <form onSubmit={handleAdmin}>
             <input type="text" placeholder="Admin Name" id="adminname"/><br/><br/>
             <input type="text" placeholder="Password" id="Password"/><br/><br/>
             <button type="submit">Click</button>
             </form>
            
        </>
    )
} 

export default Login
