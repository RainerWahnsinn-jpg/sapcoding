/** Mögliche Pipeline-Stati eines Leads. */
export const LEAD_STATUSES = ["neu", "kontaktiert", "Termin", "Kunde"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

/** Ein generierter B2B-Lead aus dem Crawler-Dashboard. */
export type Lead = {
  id: string;
  created_at: string;
  company_name: string | null;
  website: string;
  phone: string | null;
  email: string | null;
  vulnerabilities: string | null;
  pitch_email: string | null;
  status: string | null;
  is_archived: boolean;
};
