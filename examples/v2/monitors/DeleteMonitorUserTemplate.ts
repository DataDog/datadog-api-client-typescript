/**
 * Delete a monitor user template returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteMonitorUserTemplate"] = true;
const apiInstance = new v2.MonitorsApi(configuration);

const params: v2.MonitorsApiDeleteMonitorUserTemplateRequest = {
  templateId: "template_id",
};

apiInstance
  .deleteMonitorUserTemplate(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
