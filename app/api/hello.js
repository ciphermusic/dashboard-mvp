// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { supabase } from '../../data/utils/supabaseClient';

export default async function getText() {
  console.log("supabase: ", supabase);
  let {data, error} = await supabase.from('test').select('text');
  console.log("data: ", JSON.stringify(data));
  return data;
}