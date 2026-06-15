"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "../lib/supabase/server";
import { LEAD_STATUSES, type LeadStatus } from "../lib/types";

export type ActionResult = { success: true } | { success: false; error: string };

/** Stellt sicher, dass ein Admin eingeloggt ist. */
async function requireAuth() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return { supabase, user };
}

/** Aktualisiert den Pipeline-Status eines Leads. */
export async function updateLeadStatus(
  id: string,
  status: LeadStatus,
): Promise<ActionResult> {
  if (!LEAD_STATUSES.includes(status)) {
    return { success: false, error: "Ungültiger Status." };
  }

  const { supabase, user } = await requireAuth();
  if (!user) return { success: false, error: "Nicht autorisiert." };

  const { error } = await supabase
    .from("leads")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error("updateLeadStatus error", error);
    return { success: false, error: "Status konnte nicht gespeichert werden." };
  }

  revalidatePath("/admin/dashboard");
  return { success: true };
}

/** Archiviert (Soft-Delete) einen Lead. */
export async function archiveLead(id: string): Promise<ActionResult> {
  const { supabase, user } = await requireAuth();
  if (!user) return { success: false, error: "Nicht autorisiert." };

  const { error } = await supabase
    .from("leads")
    .update({ is_archived: true })
    .eq("id", id);

  if (error) {
    console.error("archiveLead error", error);
    return { success: false, error: "Lead konnte nicht archiviert werden." };
  }

  revalidatePath("/admin/dashboard");
  return { success: true };
}
