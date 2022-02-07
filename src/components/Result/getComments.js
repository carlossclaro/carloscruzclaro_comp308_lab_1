const getComments = {

   //This function/method is what we used in order to save the comments 
    saveComments(commentss) {
        console.log(commentss); //log
        localStorage.setItem('comment', JSON.stringify(commentss)); //parse string 
        
      },
      //This function lets us get the comments from the local store with the proper var
    getComments(){
        const commentString = localStorage.getItem('comment');
        const userComments = JSON.parse(commentString); //Parse string 
     
        return userComments;
      }
  }
  export default getComments;