type LeadForm = "callback_form" | "contact_form";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export const trackLeadFormSuccess = (form: LeadForm): void => {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer ??= [];
  window.dataLayer.push({
    event: "generate_lead",
    form_name: form,
  });
};
