const FindNutricionist = require('../Crawler/Nutricionist');
const Nutricionist = require('../model/NutricionistsSchema');


module.exports = {
    //Procurar um nutricionista pela numero de incrição no CFN
    async index(req,res){
        try{
            let { subs } = req.params;
            
            let nutricionistExists = await Nutricionist.findOne({subscription: subs});
            
            if(nutricionistExists){
                console.log(`Founded: ${subs}`);
                return res.json({
                    _id: nutricionistExists._id,
                    nutricionist: {
                        name: nutricionistExists.name,
                        subscription: nutricionistExists.subscription,
                        crn: nutricionistExists.crn,
                        situation: nutricionistExists.situation,
                        subscriptionType: nutricionistExists.subscriptionType,
                        lastUpdate: nutricionistExists.lastUpdate,
                    },
                });
            }
            
            const nutri = await FindNutricionist(subs);
            subs = nutri.subscription = parseInt(nutri.subscription);
            
            nutricionistExists = await Nutricionist.findOne({subscription: subs});
            
            if(nutricionistExists){
                console.log(`Founded: ${subs}`);
                return res.json({
                    _id: nutricionistExists._id,
                    nutricionist: {
                        name: nutricionistExists.name,
                        subscription: nutricionistExists.subscription,
                        crn: nutricionistExists.crn,
                        situation: nutricionistExists.situation,
                        subscriptionType: nutricionistExists.subscriptionType,
                        lastUpdate: nutricionistExists.lastUpdate,
                    },
                });
            }

            const newNutricionist = await Nutricionist.create(nutri);

            console.log(`Created: ${subs}`);

            return res.json({
                _id: newNutricionist._id,
                nutricionist: {
                    name: newNutricionist.name,
                    subscription: newNutricionist.subscription,
                    crn: newNutricionist.crn,
                    situation: newNutricionist.situation,
                    subscriptionType: newNutricionist.subscriptionType,
                    lastUpdate: newNutricionist.lastUpdate,
                },
            });

        } catch (err) {
            return res.json(err);
        }
    }
}
