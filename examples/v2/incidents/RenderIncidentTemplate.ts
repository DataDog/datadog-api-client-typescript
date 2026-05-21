/**
 * Render an incident template returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.renderIncidentTemplate"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiRenderIncidentTemplateRequest = {
  body: {
    data: {
      attributes: {
        content: "Incident INC-123 is SEV-1.",
        datetimeFormat: "2006-01-02T15:04:05Z07:00",
        timezone: "America/New_York",
        validateLinks: false,
        validateVariables: false,
      },
      type: "rendered_templates",
    },
  },
  incidentId: "incident_id",
};

apiInstance
  .renderIncidentTemplate(params)
  .then((data: v2.IncidentRenderedTemplateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
