/**
 * Delete a single kind returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.SoftwareCatalogApi(configuration);

const params: v2.SoftwareCatalogApiDeleteCatalogKindRequest = {
  kindId: "my-job",
};

apiInstance
  .deleteCatalogKind(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
