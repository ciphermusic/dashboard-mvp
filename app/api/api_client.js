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

const numberToDealState = {
	0: "New",
    1: "Active",
    2: "Await_Master",
    3: "Await_Publisher",
    4: "Await_Other",
    5: "Email_Master_Sent",
    6: "Email_Publisher_Sent",
    7: "Email_Others_Sent",
    8: "Contract_Sent",
    9: "Signed",
    10: "Payment_Sent",
    11: "Payment_Complete",
    12: "Done",
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
    const { error } = await supabase.from('Deal').update({ state: numberToDealState[state] }).eq('id', 1);
    if (error) {
        console.log("Couldn't update deal state: ");
    } else {
        console.log("Deal state updated: ");
    }
    return error;
}