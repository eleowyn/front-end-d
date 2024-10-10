const ambilDataUser3 = async () => {
    try {
        const response = await axios.get("https://reqres.in/api/users") 
        const {data} = await response.data
        data.forEach(({first_name, last_name}) => {
            console.log(`First Name: ${first_name}, Last Name: ${last_name}`)
        })
    } catch(error){
        console.error(error)
    }
}
ambilDataUser3();
export {ambilDataUser3};