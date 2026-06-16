/**
 * Create a form returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createForm"] = true;
const apiInstance = new v2.FormsApi(configuration);

const params: v2.FormsApiCreateFormRequest = {
  body: {
    data: {
      attributes: {
        anonymous: false,
        dataDefinition: {},
        description: "A form to collect user feedback.",
        idpSurvey: false,
        name: "User Feedback Form",
        singleResponse: false,
        uiDefinition: {},
      },
      type: "forms",
    },
  },
};

apiInstance
  .createForm(params)
  .then((data: v2.FormResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
