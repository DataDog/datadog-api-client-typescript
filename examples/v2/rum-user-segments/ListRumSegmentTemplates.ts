/**
 * List RUM segment templates returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listRumSegmentTemplates"] = true;
const apiInstance = new v2.RUMUserSegmentsApi(configuration);

apiInstance
  .listRumSegmentTemplates()
  .then((data: v2.RumSegmentTemplateListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
