const deleterecord = async (id) => {
    const res = await
        fetch('https://gorest.co.in/public-api/users/'+id,
        {
            method:'DELETE',
            headers : {
            'Content-Type': 'application/json' ,
            'Authorization':'Bearer 654750645d08921b6adb15f486c26bcabb1dfc86093af032949901aecb724880'    
            },
        })
    const data = await res.json()
    
}

export default deleterecord