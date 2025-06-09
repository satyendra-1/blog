import multer from 'multer';
const upload=multer({
  storage: multer.diskStorage({
    
  })
})
export default upload;
// destination: function (req, file, cb) {
//       cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + '-' + file.originalname)
//     }