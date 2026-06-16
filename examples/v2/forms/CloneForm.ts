/**
 * Clone a form returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.cloneForm"] = true;
const apiInstance = new v2.FormsApi(configuration);

const params: v2.FormsApiCloneFormRequest = {
  body: {
    data: {
      attributes: {
        name: "Copy of My Form",
      },
      type: "forms",
    },
  },
  formId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .cloneForm(params)
  .then((data: v2.FormResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
