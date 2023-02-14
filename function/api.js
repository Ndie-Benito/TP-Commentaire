/**
 * 
 * @param {string} url 
 * @param {RequestInit} options 
 * @returns 
 */

export async function fetchJSON(url, options = {}){
    const headers = {Accpet: 'application/json',...options.headers} 
    if(options.json){

        options.body = JSON.stringify(options.json)
        headers['Content-Type'] = 'application/json'
    }
    const r = await fetch(url,{...options,headers})
    if(!r.ok){
        throw new Error('erreur serveur',{cause:r})
     
    }
    return await r.json()
 
 }