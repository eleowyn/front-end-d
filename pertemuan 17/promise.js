const helloWorld = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello World")
        }, 2000)
    })
}
const messages = async () => {
    const msg = await helloWorld()
    console.log(msg)
}
messages();