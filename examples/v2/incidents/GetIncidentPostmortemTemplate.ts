/**
 * Get postmortem template returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getIncidentPostmortemTemplate"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiGetIncidentPostmortemTemplateRequest = {
  templateId: "template-456",
};

apiInstance
  .getIncidentPostmortemTemplate(params)
  .then((data: v2.PostmortemTemplateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
