/**
 * Get a form returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getForm"] = true;
const apiInstance = new v2.FormsApi(configuration);

// there is a valid "form" in the system
const FORM_DATA_ID = process.env.FORM_DATA_ID as string;

const params: v2.FormsApiGetFormRequest = {
  formId: FORM_DATA_ID,
};

apiInstance
  .getForm(params)
  .then((data: v2.FormResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
