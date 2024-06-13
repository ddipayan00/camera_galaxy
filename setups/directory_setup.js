import fs from 'fs';

const create_working_directory = () => {
    const dir = './workdir';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
};
export default create_working_directory; 