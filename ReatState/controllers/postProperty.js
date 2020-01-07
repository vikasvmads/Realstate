import property from "../models/property";


export let createProperty = async (req ,res )=>{
    let errors = req.validationErrors();

    if(errors){
        res.json(errors);
    }

    let promise = new Promise((resolve, reject)=>{

        const property_data = matchedData(req);
        try{
            let newProperty = await property.create(property_data);
            resolve({
                success : true,
                property : newProperty ,
                msg : ""
            })
            }
        catch(error){
            res.json(error);
        }
    })
};