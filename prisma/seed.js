const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {

    const bob = await prisma.user.create({
        data: {
            name: 'Bob'
        }
    })

    const alice = await prisma.user.create({
        data: {
            name: 'Alice'
        }
    })

    const fred = await prisma.user.create({
        data: {
            name: 'Fred'
        }
    })

    await prisma.channel.create({
        data: {
            name: 'classroom',
            users: {
                connect: [
                    {id: alice.id},
                    {id: bob.id},
                    {id: fred.id}
                    ]
            }
        }
    })

    await prisma.channel.create({
        data: {
            name: 'off-topic',
            users: {
                connect: [
                    {id: alice.id},
                    {id: bob.id}
                    ]
            }
        }
    })



    //TODO:
    // Add the following users:
    // - Alice
    // - Bob
    // - Fred

    // Add the following channels with the members:
    // - classroom: everyone
    // - off-topic: bob and alice only
    process.exit(0);
}

console.log("Running seed file")
seed()
    .catch(async e => {
        console.error(e);
        await prisma.$disconnect();
    })
    .finally(() => process.exit(1));