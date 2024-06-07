import fs from 'fs';

export const create_working_directory = () => {
    const dir = './workdir';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}