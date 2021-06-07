const updaterecord = async (user) => {
    const res = await
        fetch('https://gorest.co.in/public-api/users/'+user.id,
        {
            method:'PUT',
            headers : {
            'Content-Type': 'application/json' ,
            'Authorization':'Bearer 654750645d08921b6adb15f486c26bcabb1dfc86093af032949901aecb724880'    
            },
            body: JSON.stringify(user),
        })
    const data = await res.json()
    return data
}

export default updaterecord