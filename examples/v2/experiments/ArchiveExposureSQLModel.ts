/**
 * Archive exposure SQL model returns "The exposure SQL model was archived. Archiving an already-archived model succeeds
 * and leaves the original archive time in place." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.ExperimentsApi(configuration);

const params: v2.ExperimentsApiArchiveExposureSQLModelRequest = {
  exposureSqlModelId: "550e8400-e29b-41d4-a716-446655440000",
};

apiInstance
  .archiveExposureSQLModel(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
