import fs from 'fs';

const create_upload_directory = () => {
    const dir = './workdir/uploads';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
};
export default create_upload_directory;