/**
 * Update postmortem template returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentPostmortemTemplate"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiUpdateIncidentPostmortemTemplateRequest = {
  body: {
    data: {
      attributes: {
        name: "Standard Postmortem Template",
      },
      type: "postmortem_template",
    },
  },
  templateId: "template-456",
};

apiInstance
  .updateIncidentPostmortemTemplate(params)
  .then((data: v2.PostmortemTemplateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
