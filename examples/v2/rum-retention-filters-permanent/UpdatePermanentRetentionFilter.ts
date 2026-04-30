/**
 * Update a permanent retention filter returns "Updated" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumRetentionFiltersPermanentApi(configuration);

const params: v2.RumRetentionFiltersPermanentApiUpdatePermanentRetentionFilterRequest =
  {
    body: {
      data: {
        id: "default_replays",
        type: "permanent_retention_filters",
        attributes: {
          crossProductSampling: {
            traceSampleRate: 100,
          },
        },
      },
    },
    appId: "a33671aa-24fd-4dcd-ba4b-5bbdbafe7690",
    rfId: "default_replays",
  };

apiInstance
  .updatePermanentRetentionFilter(params)
  .then((data: v2.RumPermanentRetentionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
