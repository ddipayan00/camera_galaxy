let backend_url = "http://localhost:3001";


const handleFileUpload = async (event) => {
    try {
        let upload_image_url = `${backend_url}/upload/image`
        event.preventDefault();
        const file = event?.target[0]?.files[0]
        const formData = new FormData();
        formData.append('file', file);
            
        let headers = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
            
        headers.headers["Content-Type"] = `multipart/form-data`
        
        console.log("file : ",file);
        console.log("headers : ",headers)
        console.log("formData : ",formData)

        await axios.post(upload_image_url,formData,headers).then((res)=> {
            // console.log(res);
            if (res?.status == 200) {
                console.log("file uploaded");
            }
        }).catch((error) => {
            console.log(error);
        });
    } catch (error) {
        console.log(error);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const fetchButton = document.getElementById('fetchButton');
    fetchButton.addEventListener('submit',handleFileUpload);
});

