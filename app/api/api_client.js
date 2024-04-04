import { supabase } from '../../data/utils/supabaseClient';

import { createClient } from '@supabase/supabase-js'

const dealState = {
	"New": 0,
	"Active": 1,
    "Await_Master": 2,
    "Await_Publisher": 3,
    "Await_Other": 4,
    "Email_Master_Sent": 5,
    "Email_Publisher_Sent": 6,
    "Email_Others_Sent": 7,
    "Contract_Sent": 8,
    "Signed": 9,
    "Payment_Sent": 10,
    "Payment_Complete": 11,
    "Done": 12,
}

export const getDealState = async () => {
    const { data, error } = await 
        supabase
        .from('Deal')
        .select('state');
    
    if (error) {
        console.log("Couldn't load deal state: " + error);
    } else {
        console.log("Deal state: " + data[0].state);
        return dealState[data[0].state];
    }
}

export const postDealState = async (state) => {
    const { res, error } = await supabase.from('Deal').update({ state: state });
    if (error) {
        console.log("Couldn't update deal state: " + error);
    } else {
        console.log("Deal state updated: " + res);
    }
    return res.status;
}