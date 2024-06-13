import fs from 'fs';

const create_logs_directory = () => {
    const dir = './workdir/logs';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
};
export default create_logs_directory;