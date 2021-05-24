const FetchUser = async(pageNo) => {
  const res = await fetch('https://gorest.co.in/public-api/users?page='+pageNo,{})
  const data = await res.json()
     
  return data;
}

export default FetchUser