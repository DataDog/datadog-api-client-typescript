/**
 * Create and publish a form returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createAndPublishForm"] = true;
const apiInstance = new v2.FormsApi(configuration);

const params: v2.FormsApiCreateAndPublishFormRequest = {
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
  .createAndPublishForm(params)
  .then((data: v2.FormResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
