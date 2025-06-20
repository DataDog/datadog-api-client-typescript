/**
 * Create a Microsoft Sentinel custom destination returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.LogsCustomDestinationsApi(configuration);

const params: v2.LogsCustomDestinationsApiCreateLogsCustomDestinationRequest = {
  body: {
    data: {
      attributes: {
        enabled: false,
        forwardTags: false,
        forwardTagsRestrictionList: ["datacenter", "host"],
        forwardTagsRestrictionListType: "ALLOW_LIST",
        forwarderDestination: {
          type: "microsoft_sentinel",
          tenantId: "f3c9a8a1-4c2e-4d2e-b911-9f3c28c3c8b2",
          clientId: "9a2f4d83-2b5e-429e-a35a-2b3c4182db71",
          dataCollectionEndpoint:
            "https://my-dce-5kyl.eastus-1.ingest.monitor.azure.com",
          dataCollectionRuleId: "dcr-000a00a000a00000a000000aa000a0aa",
          streamName: "Custom-MyTable",
        },
        name: "Nginx logs",
        query: "source:nginx",
      },
      type: "custom_destination",
    },
  },
};

apiInstance
  .createLogsCustomDestination(params)
  .then((data: v2.CustomDestinationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
