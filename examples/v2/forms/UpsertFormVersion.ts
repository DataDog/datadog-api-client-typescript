/**
 * Create or update a form version returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.upsertFormVersion"] = true;
const apiInstance = new v2.FormsApi(configuration);

// there is a valid "form" in the system
const FORM_DATA_ID = process.env.FORM_DATA_ID as string;

const params: v2.FormsApiUpsertFormVersionRequest = {
  body: {
    data: {
      attributes: {
        dataDefinition: {
          description: "Welcome to the Engineering Experience Survey.",
          required: [],
          title: "Developer Experience Survey",
          type: "object",
        },
        state: "frozen",
        uiDefinition: {
          uiOrder: [],
          uiTheme: {
            primaryColor: "gray",
          },
        },
        upsertParams: {
          etag: "b51f08b698d88d8027a935d9db649774949f5fb41a0c559bfee6a9a13225c72d",
          insertOnly: false,
          matchPolicy: "none",
        },
      },
      type: "form_versions",
    },
  },
  formId: FORM_DATA_ID,
};

apiInstance
  .upsertFormVersion(params)
  .then((data: v2.FormVersionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
