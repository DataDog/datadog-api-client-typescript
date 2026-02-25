/**
 * Get a widget returns "Successful Response" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WidgetsApi(configuration);

const params: v2.WidgetsApiGetWidgetApiV2WidgetsExperienceTypeUuidGetRequest = {
  uuid: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  experienceType: "ccm_reports",
};

apiInstance
  .getWidgetApiV2WidgetsExperienceTypeUuidGet(params)
  .then((data: v2.WidgetSchemaJSONAPIDocument) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
