let USER = {
            username : 'admin',
            password : 'admin'
    }

const UserModel = {

    getUser : () => {
       return USER;
    }

    // pushUser : () => {
    //     USER.push({
    //         username : 'admin',
    //         password : 'admin'
    // })
    //}
}

module.exports = UserModel;