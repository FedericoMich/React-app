import apiGit from './mock/apiGit.json'
import apiLocalUser from './mock/apiLocalUsers.json'

const arr1 = apiGit.dataGit;
const arr2 = apiLocalUser.students;


export const ListRepos = () => {
    const arr3 = [];
    let filteredArraylog;
    for (let i = 0; i < arr1.length; i++) {
        let element = { ...arr2[i], ...arr1[i] };
        arr3.push(element)
        let filteredArray = arr3.map(e => {
             return "url" + e.url + 
             "created at" + e.created_at + 
             "update at" + e.updated_at + 
             "pushed at" + e.pushed_at});
        
        filteredArraylog = filteredArray;
        
    }

    console.log(filteredArraylog)
    return (
        <>
        </>
    )  
}
