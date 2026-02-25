/**
 * Search widgets returns "Successful Response" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WidgetsApi(configuration);

const params: v2.WidgetsApiSearchWidgetsApiV2WidgetsExperienceTypeGetRequest = {
  experienceType: "ccm_reports",
};

apiInstance
  .searchWidgetsApiV2WidgetsExperienceTypeGet(params)
  .then((data: v2.WidgetSchemaJSONAPIListDocument) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
