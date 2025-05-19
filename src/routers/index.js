import UsersRouters from "./UsersRouters.js";

let routers = ()=>{
    return [
        {url: "Authorisation",func: UsersRouters},
        {url: "Files",func: UsersRouters}
    ]
};

export default routers