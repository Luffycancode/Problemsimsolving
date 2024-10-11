// Trying my practice problems
const process_req = require('process');
let getdata=" ";
process_req.stdin.on("data",function(chunk)
{
    getdata+=chunk;
    main(getdata)
    process.exit();
})

// process_req.stdin.on("end", function()
// {
// main(getdata)
// })
function main(getdata)
{
    // process.stdout.write(getdata);
    // console.log(getdata);
    console.log(20 + getdata)
}