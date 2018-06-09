import dispatcher from "../dispatcher";

export function createBlock(){
  dispatcher.dispatch({
    type: "CREATE_BLOCK"
  });
}

export function deleteBlock(id){
  dispatcher.dispatch({
    type: "DELETE_BLOCK",
    id: id
  });
}

export function reloadBlock(){
  dispatcher.dispatch({
    type: "FETCH_BLOCK",
  });
  setTimeout(() => {
    dispatcher.dispatch({
      type: "RECEIVE_BLOCK",
    });
  },1000);
}
