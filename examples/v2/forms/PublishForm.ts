/**
 * Publish a form version returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.publishForm"] = true;
const apiInstance = new v2.FormsApi(configuration);

// there is a valid "form" in the system
const FORM_DATA_ID = process.env.FORM_DATA_ID as string;

const params: v2.FormsApiPublishFormRequest = {
  body: {
    data: {
      attributes: {
        version: 1,
      },
      type: "form_publications",
    },
  },
  formId: FORM_DATA_ID,
};

apiInstance
  .publishForm(params)
  .then((data: v2.FormPublicationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
