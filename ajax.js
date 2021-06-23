// let xhr =new XMLHttpRequest
// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//         if(xhr.status === 200){
//             let res = JSON.parse(xhr.responseText)
//         }else{
//             alert(xhr.status)
//         }
//     }
// }
//  xhr.open(url,params)
// xhr.send(null)



// ajax + callback
/**
 * 
 * @param {String} url 
 * @param {String} params 
 * @param {function} callback 
 */
function get_callback(url,params,callback){
    let xhr =new XMLHttpRequest
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                let res = JSON.parse(xhr.responseText)
                callback(res)
            }else{
                alert(xhr.status)
            }
        }
    }
    xhr.open('get',`${url}?${params}`)
    xhr.send(null)
}


/**
 * 
 * @param {string} url 
 * @param {string} params 
 * @param {function} callback 
 */
function post_callback(url,params,callback){
    let xhr =new XMLHttpRequest
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                let res = JSON.parse(xhr.responseText)
                callback(res)
            }else{
                alert(xhr.status)
            }
        }
    }
    xhr.open('post',url)
    xhr.setRequestHeader( "content-type", "application/x-www-form-urlencoded" );
    xhr.send(params)
}

/**
 * 
 * @param {string} url 
 * @param {string} params 
 */
function axios(url,params){
    return new Promise ((resolve,reject)=>{
        let xhr =new XMLHttpRequest
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                let res = JSON.parse(xhr.responseText)
                resolve(res)
            }else{
                reject(xhr.status)
            }
        }
    }
    xhr.open('get',`${url}?${params}`)
    xhr.send(null)
    }
    )
}

/**
 * 
 * @param {string} url 
 * @param {string} params 
 */
 function post_promise(url,params){
     return new Promise((resolve,reject)=>{
        let xhr =new XMLHttpRequest
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                let res = JSON.parse(xhr.responseText)
                resolve(res)
            }else{
                reject(xhr.status)
            }
        }
    }
    xhr.open('post',url)
    xhr.setRequestHeader( "content-type", "application/x-www-form-urlencoded" );
    xhr.send(params)
     })
    
}