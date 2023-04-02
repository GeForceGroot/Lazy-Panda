import * as fs from 'fs';

export default async function handler(req, res){
    if (req.method === 'POST'){
        // Process a POST request
        console.log(req.body);
        let data =  fs.promises.readdir('contactdata');
        // console.log(data);
        fs.promises.writeFile(`contactdata/${(await data).length+1}.json`, JSON.stringify(req.body), ()=>{})
        res.status(200).json(["Yes Post request"])
    } else {
        // Handle ny other HTTP method
        res.status(200).json(["allBlogs"])
    }
}