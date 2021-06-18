import {MainService} from '../Services/main.services';
export class ApiServices{

    // constructor(){

    // }

    getUsers(){

        return new MainService().callWebserviceHttpGet('/users', '')
    }

    getStudents(searchText
        ,orderBy
        ,orderDir
        ,page
        ,pageSize){

        return new MainService().callWebserviceHttpGet("/students?search=" + encodeURIComponent(searchText) + + "&orderBy=" + orderBy + "&orderDir=" + orderDir + "&page=" + page + "&pageSize=" + pageSize, '')
    }
}