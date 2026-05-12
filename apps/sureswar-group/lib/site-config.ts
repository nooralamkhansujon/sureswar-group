/** Replace with real URLs when available. */
export const externalUrls = {
  sureswarTravels:
    process.env.NEXT_PUBLIC_SURESWAR_TRAVELS_URL ?? "https://example.com/sureswar-travels",
  hiCareServices:
    process.env.NEXT_PUBLIC_HICARE_SERVICES_URL ?? "https://example.com/hicare-services",
} as const;

export const contact = {
  phoneDisplay: "+880 1711-000000",
  phoneTel: "+8801711000000",
  email: "info@sureswargroup.com",
  /** Used for the embedded map search; update to your registered address. */
  mapQuery: "Dhaka, Bangladesh",
} as const;
