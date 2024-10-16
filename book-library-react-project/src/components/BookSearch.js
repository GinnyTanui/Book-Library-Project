import axios from 'axios' 

 export const BookSearch = async (query,type) => {  
    let url="";
    if(type === "title"){
        url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}`
        }else if (type === "author"){
         url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${query}`
        }
        try{
            const response = await axios.get(url)  
            console.log(response.data);
            if(response.status !== 200 ){ 
                console.error("Error fetching book:", response.status, response.statusText);
                throw new Error("Sorry!we have encontered an error fetching the book");
              
            } 
            console.log(response.data.items) 
            return response.data.items || [];
           
           
        }catch(error){
             console.error(error);
             return[];
        }


}  

