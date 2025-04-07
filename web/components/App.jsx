import { useGadget } from "@gadgetinc/react-shopify-app-bridge";
import { Outlet } from "@remix-run/react";
import { Page, Text } from "@shopify/polaris";
import { FullPageSpinner } from "./FullPageSpinner";
import { NavMenu } from "./NavMenu";

export function AuthenticatedApp() {
  const { isAuthenticated, loading } = useGadget();

  if (loading) {
    return <FullPageSpinner />;
  }

  return isAuthenticated ? <EmbeddedApp /> : <Unauthenticated />;
}

function Unauthenticated() {
  return (
    <Page title="App">
      <Text variant="bodyMd" as="p">
        App can only be viewed in the Shopify Admin.
      </Text>
    </Page>
  );
}

function EmbeddedApp() {
  return (
    <>
      <NavMenu />
      <Outlet />
    </>
  );
}
