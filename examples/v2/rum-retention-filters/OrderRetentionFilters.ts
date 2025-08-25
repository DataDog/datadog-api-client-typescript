/**
 * Order RUM retention filters returns "Ordered" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumRetentionFiltersApi(configuration);

const params: v2.RumRetentionFiltersApiOrderRetentionFiltersRequest = {
  body: {
    data: [
      {
        type: "retention_filters",
        id: "325631eb-94c9-49c0-93f9-ab7e4fd24529",
      },
      {
        type: "retention_filters",
        id: "42d89430-5b80-426e-a44b-ba3b417ece25",
      },
      {
        type: "retention_filters",
        id: "bff0bc34-99e9-4c16-adce-f47e71948c23",
      },
    ],
  },
  appId: "1d4b9c34-7ac4-423a-91cf-9902d926e9b3",
};

apiInstance
  .orderRetentionFilters(params)
  .then((data: v2.RumRetentionFiltersOrderResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
