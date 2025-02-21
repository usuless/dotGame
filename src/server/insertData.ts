import { supabase } from "./client";

export async function InsertData(name: string, score: number) {
    //@ts-ignore
    const { error } = await supabase
        .from("dotGame")
        .insert({ playerName: name, score: score });
}
