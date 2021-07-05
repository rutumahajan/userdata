const FilterStatusRecord =async(pageNo,status) => {
    const res = await fetch(`https://gorest.co.in/public-api/users?page=${pageNo}&status=${status}`,{})
    const data = await res.json(); 
    return data;
  }
  
  export default FilterStatusRecord