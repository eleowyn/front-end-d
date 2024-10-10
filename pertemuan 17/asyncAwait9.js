const ambilDataUser2 = async () => {
    try {
        const response = await fetch("https://reqres.in/api/users")
        const {data} = await response.json()
        data.forEach(({first_name, last_name}) => {
            console.log(`First Name: ${first_name}, Last Name: ${last_name}`)
        })
    } catch (error) {
        console.error("Error coi")
    }
}
ambilDataUser2()
export {ambilDataUser2}