export const defaults = {
    isLoggedIn: Boolean(localStorage.getItem('token')) || false
}

export const resolvers = {
    Mutation:  {
        logUserin: (_,{token},{cache}) =>{
            localStorage.setItem('token',token);
            cache.writeData({
                data:{
                    isLoggedIn: true
                }
            });
            return null;
        },
        logUserOut: (_,__,{cache}) => {
            localStorage.removeItem('token');
            window.location.reload();
            return null;
        }
    }
}