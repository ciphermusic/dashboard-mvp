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
        console.log("Couldn't update deal state");
    } else {
        console.log("Deal state updated");
    }
    return error;
}

export const getUserId = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    return user;
}

export const getCurrentPrice = async () => {
    const currentPrice = await supabase.from('Deal').select('price').eq('id', 1);
    const jsonbObject = currentPrice.data[0].price;

    return jsonbObject;
}

export const postDealPrice = async ({userId, price}) => {
    const jsonbObject = await getCurrentPrice();
    
    jsonbObject[userId] = price;

    const { error } = await supabase.from('Deal').update({ price: jsonbObject }).eq('id', 1);

    if (error) {
        console.log("Couldn't update deal price");
    } else {
        console.log("Deal price updated");
    }

    return error;
}

export const getGenerateLicense = async () => {
    const { data, error } = await supabase.from('Deal').select('generate_license').eq('id', 1);

    if (error) {
        console.log("Couldn't load generate license: " + error);
    } else {
        console.log("Generate license: " + data[0].generate_license);
        return data[0].generate_license;
    }
}

export const postGenerateLicense = async (generate_license) => {
    const { error } = await supabase.from('Deal').update({generate_license: generate_license}).eq('id', 1);

    if (error) {
        console.log("Couldn't update generate license");
    } else {
        console.log("Generate license updated");
        return error;
    }
}

export const getPublishers = async () => {
    const { data, error } = await supabase.from('Deal').select("Publishers");

    if (error) {
        console.log("Couldn't get publishers: " + error);
    } else {
        return data[0].Publishers;
    }
}

export const getWriters = async () => {
    const { data, error } = await supabase.from('Deal').select("Writers");

    if (error) {
        console.log("Couldn't get writers: " + error);
    } else {
        return data[0].Writers;
    }
}

export const postPublishers = async (updatedPublishers) => {
    const { error } = await supabase.from('Deal').update({ Publishers: updatedPublishers }).eq('id', 1);

    if (error) {
        console.log("Couldn't update Publishers");
    } else {
        console.log("Publishers updated");
    }

    return error;
}

export const postWriters = async (updatedWriters) => {
    console.log('updating writers', updatedWriters);
    const { error } = await supabase.from('Deal').update({ Writers: updatedWriters }).eq('id', 1);

    if (error) {
        console.log("Couldn't update writers");
    } else {
        console.log("Writers updated");
    }

    return error;
}