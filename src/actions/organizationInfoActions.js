import axios from 'axios'

export function fetchInfo(){
  return{
    type:'FETCH_APP_INFO',
    payload:axios({
      method:'get',
      url:'http://127.0.0.1:3000/info',
      headers:{
        'Access-Control-Allow-Origin':'*'
      }
    })
  }
}

export function getUsers(){
  return{
    type:'FETCH_USERS',
    payload:axios({
      method:'get',
      url:'http://127.0.0.1:3000/users',
      headers:{
        'Access-Control-Allow-Origin':'*'
      }
    })
  }
}


export function getEvents(){
  return{
    type:'FETCH_EVENTS',
    payload:axios({
      method:'get',
      url:'http://127.0.0.1:3000/events',
      headers:{
        'Access-Control-Allow-Origin':'*'
      }
    })
  }
}

export function fetchGraphEvents(){
  return{
    type:'FETCH_GRAPH_EVENTS',
    payload:axios({
      method:'get',
      url:'http://127.0.0.1:3000/eventsGraph',
      headers:{
        'Access-Control-Allow-Origin':'*'
      }
    })
  }
}

export function fetchRepos(){
  return{
    type:'FETCH_REPOS',
    payload:axios({
      method:'get',
      url:'http://127.0.0.1:3000/repos',
      headers:{
        'Access-Control-Allow-Origin':'*'
      }
    })
  }
}