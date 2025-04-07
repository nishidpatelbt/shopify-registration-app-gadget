import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "customerInfo" model, go to https://customer-auth.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "DFQJ3uYmJWEr",
  fields: {
    Apartment: { type: "string", storageKey: "OYKQFmQyj5SI" },
    House: { type: "string", storageKey: "wzPfIxascTbd" },
    Street: { type: "string", storageKey: "WDLfiRhiBgTO" },
    artPurchase: { type: "string", storageKey: "v52pUWt1nNi8" },
    artworksNumber: { type: "string", storageKey: "Z6474QQrsust" },
    birthday: { type: "string", storageKey: "WQ2n-ypJGaNn" },
    country: { type: "string", storageKey: "2tAx3b9sW-FO" },
    email: {
      type: "email",
      validations: { unique: true },
      storageKey: "H8Gv2r8Y1OPE",
    },
    firstName: { type: "string", storageKey: "T0DsTa55pK6-" },
    interest: { type: "string", storageKey: "TvIrCLkIswjl" },
    lastName: { type: "string", storageKey: "tF81oAHTc4UY" },
    phoneNumber: { type: "string", storageKey: "GQBu1o0l_KBq" },
    postalCode: { type: "string", storageKey: "FSHkhPMWbxcL" },
    rangeValue: { type: "string", storageKey: "zabVqRg8TxtP" },
    shop: { type: "string", storageKey: "Y0Tap9crBSIs" },
    townCity: { type: "string", storageKey: "FBr1JUghdLE-" },
  },
};
