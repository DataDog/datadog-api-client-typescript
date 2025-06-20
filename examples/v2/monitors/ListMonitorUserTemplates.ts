/**
 * Get all monitor user templates returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listMonitorUserTemplates"] = true;
const apiInstance = new v2.MonitorsApi(configuration);

apiInstance
  .listMonitorUserTemplates()
  .then((data: v2.MonitorUserTemplateListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
