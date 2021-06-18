const axios = require('axios').default;

export class MainService {

  url = 'http://localhost:8100';
  environment = 'http://localhost:8100';

  // constructor() { }

  // GET
  callWebserviceHttpGet(webserviceApiName, authKey) {
    let httpOptions = {
        'Content-Type': 'application/json',
        method : 'get',
        // 'X-Security-AuthKey': authKey ? authKey : '',
        // 'X-LoginSource': 'weboffice',
        responseType : 'json'
      }
    return axios.get((this.url) + webserviceApiName, httpOptions).then((res)=> { return res.data;});
  }
//   //GET SURVEY DETAIL WITH TOKEN
//   callWebserviceHttpTokenGet(webserviceApiName, token) {
//     let httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'X-Security-AuthKey': '',
//         'X-LoginSource': 'weboffice',
        
//         'X-Token': token ? token : '',
//       }),
//       observe: "response" as 'body'
//     }
//     return this.axios.get((this.url ? this.url : environment.url) + webserviceApiName, httpOptions).toPromise();
//   }
  
//   // GET FILE
//   callWebserviceHttpGetFile(webserviceApiName, authKey) {
//     return this.axios.get(this.url + webserviceApiName, {
//       headers: new HttpHeaders({
//         'X-Security-AuthKey': authKey ? authKey : '',
//         'X-LoginSource': 'weboffice'
//       }),
//       responseType: 'blob', 
//       observe: "response" as 'body',
//     }).toPromise();
//   }

//   // GET FILE WITH POST
//   callWebserviceHttpGetFileWithPost(webserviceApiName, data, authKey) {
//     return this.axios.post(this.url + webserviceApiName, data, {
//       headers: new HttpHeaders({
//         'X-Security-AuthKey': authKey ? authKey : '',
//         'X-LoginSource': 'weboffice'
//       }),
//       responseType: 'blob',
//       observe: "response" as 'body',
//     }).toPromise();
//   }

//   // GET without header
//   callWebserviceHttpGetNoHeader(webserviceApiName, authKey) {
//     let headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'X-Security-AuthKey': authKey ? authKey : '',
//       'X-LoginSource': 'weboffice'
//     })
//     return this.axios.get((this.url ? this.url : environment.url) + webserviceApiName, { headers: headers }).toPromise();
//   }

//   // GET By Id
//   callWebserviceHttpGetById(id, webserviceApiName, authKey) {
//     let headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'X-Security-AuthKey': authKey ? authKey : '',
//       'X-LoginSource': 'weboffice'
//     })
//     return this.axios.get((this.url ? this.url : environment.url) + webserviceApiName + '/' + id, { headers: headers }).toPromise();
//   }

//   // POST
//   callWebserviceHttpPost(webserviceApiName, objParams, authKey) {
//     let headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'X-Security-AuthKey': authKey ? authKey : '',
//       'X-LoginSource': 'weboffice',
      
//     })
//     return this.axios.post((this.url ? this.url : environment.url) + webserviceApiName, objParams, { headers: headers }).toPromise();
//   }
 
//     //POST FOR FORM
//     callWebserviceHttpFormPost(webserviceApiName, objParams, authKey) {
//       let httpOptions = {
//         headers: new HttpHeaders({
//           'X-Security-AuthKey': authKey ? authKey : '',
//           'X-LoginSource': 'weboffice',
          
//         }),
//         observe: "response" as 'body',
//         "processData": false,
//         "mimeType": "multipart/form-data",
//         "contentType": false,
//       }
//       // let headers = new HttpHeaders({
      
//       //   'X-Security-AuthKey': authKey ? authKey : '',
//       //   'X-LoginSource': 'weboffice'
      
//       // })
//       return this.axios.post((this.url ? this.url : environment.url) + webserviceApiName, objParams, httpOptions).toPromise();
//     }
//   // PUT
//   callWebserviceHttpPut(webserviceApiName, objParams, authKey, ) {
//     let headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'X-Security-AuthKey': authKey ? authKey : '',
//       'X-LoginSource': 'weboffice',
      
//     })
//     return this.axios.put((this.url ? this.url : environment.url) + webserviceApiName, objParams, { headers: headers }).toPromise();
//   }

//   // PUT WITH PASSWORD
//   callWebserviceHttpPutWithPassword(webserviceApiName, objParams, password, authKey) {
//     let headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'X-Security-AuthKey': authKey ? authKey : '',
//       'Authorization': password,
//       'X-LoginSource': 'weboffice',
      
//     })
//     return this.axios.put((this.url ? this.url : environment.url) + webserviceApiName, objParams, { headers: headers }).toPromise();
//   }

//   // POST WITH PASSWORD
//   callWebserviceHttpPostWithPassword(webserviceApiName, objParams, password, authKey) {
//     let headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'X-Security-AuthKey': authKey ? authKey : '',
//       'Authorization': password,
//       'X-LoginSource': 'weboffice',
      
//     })
//     return this.axios.post((this.url ? this.url : environment.url) + webserviceApiName, objParams, { headers: headers }).toPromise();
//   }

//   // PUT FILE
//   callWebserviceHttpPutFile(webserviceApiName, objParams, authKey) {
//     let headers = new HttpHeaders({
//       'X-Security-AuthKey': authKey ? authKey : '',
//       'X-LoginSource': 'weboffice',
      
//     })
//     return this.axios.put((this.url ? this.url : environment.url) + webserviceApiName, objParams, { headers: headers }).toPromise();
//   }

//   // PATCH
//   callWebserviceHttpPatch(webserviceApiName, objParams, authKey) {
//     let headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'X-Security-AuthKey': authKey ? authKey : '',
      
//     })
//     return this.axios.patch((this.url ? this.url : environment.url) + webserviceApiName, objParams, { headers: headers }).toPromise();
//   }

//   // DELETE
//   callWebserviceHttpDelete(webserviceApiName, ids, authKey) {
//     let options = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'X-Security-AuthKey': authKey ? authKey : '',
//         'X-LoginSource': 'weboffice',
        
//       })
//     };
//     // return this.axios.delete((this.url ? this.url : environment.url) + webserviceApiName + ids + "?localeCode=" + ((localStorage.locale && !Number.isNaN(Number(localStorage.locale))) ? localStorage.locale : 1043), options).toPromise();
  
//     return this.axios.delete((this.url ? this.url : environment.url) + webserviceApiName + ids, options).toPromise();
//   }

// // DELETE USER WITH PASSWORD
//   callWebserviceHttpUserDelete(webserviceApiName, ids, password, authKey) {
//     let options = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'X-Security-AuthKey': authKey ? authKey : '',
//         'Authorization': password,
//         'X-LoginSource': 'weboffice',
        
//       })
//     };
//     return this.axios.delete((this.url ? this.url : environment.url) + webserviceApiName + ids, options).toPromise();
//   }


}

