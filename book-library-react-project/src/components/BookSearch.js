import axios from 'axios' 

 export const BookSearch = async (query,type) => {  
    let url="" 
    if(type === "title"){
        url = `https://openlibrary.org/search.json?title=${query}`
        }else if(type === "author"){
         url = `https://openlibrary.org/search.json?author=${query}`
        }
        try{
            const response = await axios.get(url)  
            console.log(response.data);
            if(response.status !== 200 ){ 
                console.error("Error fetching book:", response.status, response.statusText);
                throw new Error("Sorry!we have encontered an error fetching the book");
              
            } 
            console.log(response.data.docs) 
            return response.data.docs || [];
           
           
        }catch(error){
             console.error(error);
             return[];
        }


}  

