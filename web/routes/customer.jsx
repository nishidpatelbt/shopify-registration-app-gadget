import { json } from "@remix-run/node"; // Import `json` to return proper Remix responses

export function loader() {
    return json({ customer: "here is fetched data successfully" });
}

export async function action({ request, context }) {
    let data = await request.json();
    let url = `https://${context.env.BASE_URL}/api/2025-01/graphql.json`;
    let storefrontAccessToken = context.env.STOREFRONT_ACCESS_TOKEN;
    
    const requestBody = {
      query: `
        mutation customerCreate($input: CustomerCreateInput!) {
          customerCreate(input: $input) {
            customer {
              firstName
              lastName
              email
              phone
              acceptsMarketing
            }
            customerUserErrors {
              field
              message
              code
            }
          }
        }
      `,
      variables: {
        input: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          password: data.password,
          acceptsMarketing: false
        }
      }
    };

    // const customerAddress = {
    //     query: `
    //     mutation customerAddressCreate($address: MailingAddressInput!) {
    //       customerAddressCreate(address: $address) {
    //         customer {
    //           firstName
    //           lastName
    //           email
    //           phone
    //           acceptsMarketing
    //         }
    //         customerUserErrors {
    //           field
    //           message
    //           code
    //         }
    //       }
    //     }
    //   `,
    //   variables: {
    //     address: {
    //       address1: `${data.House}${data.Apartment}`,
    //         address2: data.Street,
    //         city: data.townCity,
    //         company: "",
    //         country: data.country,
    //         firstName: data.firstName,
    //         lastName: data.lastName,
    //         phone: data.phone,
    //         province: "",
    //         zip: data.postalCode
    //     }
    //   }
    // }
    
    try {
    const response = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken
        },
        body: JSON.stringify(requestBody)
    });
    // const responseAddress = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //     "Content-Type": "application/json",
    //     "X-Shopify-Storefront-Access-Token": storefrontAccessToken
    //     },
    //     body: JSON.stringify(customerAddress)
    // });
    const result = await response.json();
    //const resultAddress = await responseAddress.json();
        return json({ message: "Data added successfully", receivedData: result });
    } catch (error) {
        console.error("Error creating customer:", error);
    }
    
    return null;
}