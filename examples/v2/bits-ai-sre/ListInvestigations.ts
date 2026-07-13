/**
 * List Bits AI SRE investigations returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listInvestigations"] = true;
const apiInstance = new v2.BitsAISREApi(configuration);

apiInstance
  .listInvestigations()
  .then((data: v2.ListInvestigationsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
