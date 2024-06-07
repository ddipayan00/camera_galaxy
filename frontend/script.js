let backend_url = "http://localhost:3001";


const handleFileUpload = (event) => {
    try{ 
        console.log("gtavi")
        event.preventDefault(); 
        if (event?.target[0]?.files[0]?.length > 0)  {
            const formData = new FormData();
            console.log(event?.target[0]?.files[0]);
            formData.append('file', event?.target[0]?.files[0]);
        }
        try {
            axios.get(url=`${backend_url}/test/simple-get`)
            .then((res)=> {
                console.log(res);
            }).catch((error) => {
                console.log(error);
            });

            axios.post(url=`${backend_url}/upload/image`,formData,{headers: {
                'Content-Type': `multipart/form-data`,
                'Content-Length': formData.length
            }}).then((res)=> {
                console.log(res);
                if (res?.status == 200) {
                    console.log("file uploaded");
                }
            }).catch((error) => {
                
            });
        } catch (error) {
            
        }
    }
    catch(e){
        console.log(e);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const fetchButton = document.getElementById('fetchButton');
    fetchButton.addEventListener('submit',handleFileUpload);
});

