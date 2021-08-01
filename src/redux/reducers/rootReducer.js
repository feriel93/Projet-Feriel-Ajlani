const InitialStat = {favoris: []}
const Reducer =(state=InitialStat,Action)=>{

    switch (Action.type) {
        case "ADD_TO_FAV":
                if(!state.favoris.includes(Action.payload) || state.favoris.length===0)
                {
                        console.log("state")
                        return {...state,favoris:[...state.favoris,Action.payload]}
                }
                else return state;
      
        case "RM_FROM_FAV":
        
                let arr = state.favoris.filter(elem=> elem.id!==Action.payload);
        return {...state,favoris:arr}


        default:
                return state;
            
    }
}
export default Reducer;