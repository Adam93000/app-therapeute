"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface BookingWidgetProps {
  calLink: "catalinapedrero";
  namespace?: "consultations";
}

const siteThemeVars: Record<string, string> = {
  "cal-brand": "#4E5F54",
  "cal-brand-emphasis": "#3C4B3F",
  "cal-brand-text": "#FAF9F6",
  "cal-bg": "#FAF9F6",
  "cal-bg-emphasis": "#E9EFEA",
  "cal-bg-subtle": "#F4EAE2",
  "cal-text": "#333333",
  "cal-text-emphasis": "#333333",
  "cal-text-subtle": "#5A635D",
  "cal-border": "#9CAEA9",
  "cal-border-subtle": "#DDE4DF",
  "cal-border-emphasis": "#4E5F54",
};

export default function BookingWidget({
  calLink,
  namespace = "consultations",
}: BookingWidgetProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: siteThemeVars,
          dark: siteThemeVars,
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [namespace]);

  return (
    <div className="mx-auto w-full max-w-4xl">
      <Cal
        namespace={namespace}
        calLink={calLink}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
