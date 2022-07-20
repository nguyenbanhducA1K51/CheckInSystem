const jwt=require("jsonwebtoken")
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmIyOGNlMGY4YTNiODA3NDQ5Mjc5NWIiLCJpYXQiOjE2NTcwOTU2NTN9.PRbXIvD_fDsNgygJxCABpGh7nHDutWynaEEG_9Pn1qc"
const payload={
  "_id":"62b00871879ef62385c26d90"
}
console.log(jwt.sign(payload,"nhavodichcuanhandan"))
// decoded token
jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmIyOGNlMGY4YTNiODA3NDQ5Mjc5NWIiLCJpYXQiOjE2NTcwOTAwOTV9.br4AFxEv7Xi28vsip4GCCxO4I-2VXUVDk_3dF8NCEUg","nhavodichcuanhandan", function (err, decoded) {
  if (err) {
    console.log(err);

    return res
      
  } else {
    console.log(decoded)
  }
})