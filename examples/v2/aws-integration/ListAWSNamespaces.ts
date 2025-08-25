/**
 * List available namespaces returns "AWS Namespaces List object" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listAWSNamespaces"] = true;
const apiInstance = new v2.AWSIntegrationApi(configuration);

apiInstance
  .listAWSNamespaces()
  .then((data: v2.AWSNamespacesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
