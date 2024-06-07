import multer from 'multer'
import path from 'path';

// Set up storage for multer
export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'workdir/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload variable
export const upload = multer({ storage: storage });