import axios from "axios";
backend_url = "http://localhost:3001"


function handleFileUpload(event){
    console.log("handleFileUpload()")
    event.preventDefault();
    if (event.files.length > 0)  {
        const formData = new FormData();
        formData.append('image', event.files[0]);
    }
    const payload = {
        filename: file.name,
        data: base64String,
    };
    try {
        axios.post(url=`${backend_url}/upload/image`,formData,{headers: {
            'Content-Type': 'multipart/form-data',
        }})
        .then(()=> {
            // alert("gta v");
        }).catch(() => {
    
        });
    } catch (error) {
        
    }
}

