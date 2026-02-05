/**
 * Create postmortem template returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentPostmortemTemplate"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentPostmortemTemplateRequest = {
  body: {
    data: {
      attributes: {
        name: "Standard Postmortem Template",
      },
      type: "postmortem_template",
    },
  },
};

apiInstance
  .createIncidentPostmortemTemplate(params)
  .then((data: v2.PostmortemTemplateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
