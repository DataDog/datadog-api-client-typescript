/**
 * Add a security signal to an incident returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.SecurityMonitoringApi(configuration);

const params: v1.SecurityMonitoringApiAddSecurityMonitoringSignalToIncidentRequest =
  {
    body: {
      incidentId: 2609,
    },
    signalId: "AQAAAYDiB_Ol8PbzFAAAAABBWURpQl9PbEFBQU0yeXhGTG9ZV2JnQUE",
  };

apiInstance
  .addSecurityMonitoringSignalToIncident(params)
  .then((data: v1.SuccessfulSignalUpdateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
