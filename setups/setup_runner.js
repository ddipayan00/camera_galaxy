import create_logs_directory from "./logging_setup.js";
import create_upload_directory from "./upload_folder_setup.js";
import create_working_directory from "./directory_setup.js";


const setup_runner = () => {
    try {
        create_working_directory();
        create_logs_directory();
        create_upload_directory();
        return true;
    }
    catch (error) {
        console.log(error)
        return null;
    }
};
export default setup_runner;