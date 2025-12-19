/**
 * Synthetics: Bulk delete suites returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiDeleteSyntheticsSuitesRequest = {
  body: {
    data: {
      attributes: {
        publicIds: [""],
      },
      type: "delete_suites_request",
    },
  },
};

apiInstance
  .deleteSyntheticsSuites(params)
  .then((data: v2.DeletedSuitesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
