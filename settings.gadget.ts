import type { GadgetSettings } from "gadget-server";

export const settings: GadgetSettings = {
  type: "gadget/settings/v1",
  frameworkVersion: "v1.3.0",
  plugins: {
    connections: {
      shopify: {
        apiVersion: "2025-01",
        enabledModels: [
          "shopifyCompany",
          "shopifyCompanyContactRoleAssignment",
          "shopifyCustomer",
        ],
        type: "partner",
        scopes: ["read_customers", "write_customers"],
        customerAuthenticationEnabled: true,
      },
    },
  },
};
