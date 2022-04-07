const prisma = require('../utils/prisma');

const getUsers = async(req, res) => {

    const users = await prisma.user.findMany({ 
        include: {
        channels: true
        }
    })
        
        res.json({users: users })

}




module.exports = { getUsers };
