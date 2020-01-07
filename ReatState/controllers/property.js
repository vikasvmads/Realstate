import property from "../models/property";

/*
Search API for the user to search the property 
1- Search by city name
2- Seach by prize
3- Search by state
4- Blank Search
*/
export let searchByCity = async (req , res) =>{
    let errors = req.validationErrors();
    if(errors){
        res.json(errors);
    }
    let city    = req.city ; 
    let promise = new Promise((reslove , reject )=>{
        try{
            let results = await property.find({ city : req.city });
            if(results){
                return reslove({
                    prpertyDetails : results,
                    success : true ,
                    msg : ""
                })
            }
        }catch(error){
            reject(error);
        }
    });
    return promise;
}

export let searchByState = async (req, res) => {
    let errors = req.validationErrors();

    if(errors){
        res.json(errors);
    }

    let promise = new Promise((reslove, reject)=>{
        try{
            let state = req.state;
            let results = await property.find({ state : state , acive : true });
            if(results){
                reslove({
                    prpertyDetails : results,  
                    success        : true,
                    msg            : ""
                })
            }else{
                reject({
                    prpertyDetails : results,  
                    success        : true,
                    msg            : "No propert found with this state : `${state}`"
                })
            }
        }catch(error){
            reject : error;
        }
    });
    return promise;
}

export let searchByID= async(req , res)=>{
    let errors = req.validationErrors();

    if(errors){
        res.json(errors);
    }
    let promise = new Promise((reslove, reject)=>{
        try{
            let id = req.params.id;
            let results = await property.findById({ id : id });
            if(results){
                reslove({
                    prpertyDetails : results,  
                    success        : true,
                    msg            : ""
                })
            }else{
                reject({
                    prpertyDetails : results,  
                    success        : true,
                    msg            : "No propert found with this id : `${id}`"
                })
            }
        }catch(error){
            reject : error;
        }
    });
    return promise;
}

export let searchByUser= async(req , res)=>{
    let errors = req.validationErrors();

    if(errors){
        res.json(errors);
    }
    let promise = new Promise((reslove, reject)=>{
        try{
            let id = req.params.username;
            let results = await property.findById({ userid : username });
            if(results){
                reslove({
                    prpertyDetails : results,  
                    success        : true,
                    msg            : ""
                })
            }else{
                reject({
                    prpertyDetails : results,  
                    success        : true,
                    msg            : "No propert found with this id : `${id}`"
                })
            }
        }catch(error){
            reject : error;
        }
    });
    return promise;
}



