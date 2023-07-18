import Ajax from "./Ajax";

const Apartment = {
    get: ()=>{
        return Ajax.get('/apartments', null, {});
    },

    highlighted: ()=>{
        return Ajax.get('/apartments/highlighted', null, {});
    }
}

export default Apartment