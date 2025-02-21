import { supabase } from "./client";

export async function getData(db: any) {
    const { data } = await supabase
        .from(`dotGame`)
        .select("playerName, score")
        .order("score", { ascending: false })
        .limit(10);
    db.value = data;
    return db;
}
