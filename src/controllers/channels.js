const prisma = require('../utils/prisma');

const getChannels = async(req, res) => {

    const channel = await prisma.channel.findMany({ 
        include: {
        users: true
        }
    })
        
        res.json({users: users })

}





module.exports = { getChannels };
