import fs from 'fs';

export const create_logs_directory = () => {
    const dir = './workdir/logs';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}