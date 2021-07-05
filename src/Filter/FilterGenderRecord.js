const FilterGenderRecord =async(pageNo,gender) => {
    const res = await fetch(`https://gorest.co.in/public-api/users?page=${pageNo}&gender=${gender}`,{})
    const data = await res.json(); 
    return data;
  }
  
  export default FilterGenderRecord