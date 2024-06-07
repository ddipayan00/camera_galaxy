import fs from 'fs';

export const create_upload_directory = () => {
    const dir = './workdir/uploads';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}