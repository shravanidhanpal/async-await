const post=async()=>{
    const createpost=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('post'),2000);
    });
    
    const deletepost=new Promise((resolve,reject)=> resolve(`DeletePost`));
    
    let post= await createpost;
    
    let post1;
    const post2=post.push(post1);
    console.log(post2);

    let DeletePost=await deletepost;

    if(post.length>0){
        const element=post.pop();
        console.log(element);
    }
    return post;
}
post().then((m)=>console.log(m));