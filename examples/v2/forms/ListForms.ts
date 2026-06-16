/**
 * List forms returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listForms"] = true;
const apiInstance = new v2.FormsApi(configuration);

apiInstance
  .listForms()
  .then((data: v2.FormsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
