/**
 * Create or update an archive configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMManagedArchivesApi(configuration);

const params: v2.RUMManagedArchivesApiUpdateRUMArchiveConfigRequest = {
  body: {
    data: {
      attributes: {
        enabled: true,
        retentionDays: 90,
      },
      id: "a33671aa-24fd-4dcd-ba4b-5bbdbafe7690",
      type: "rum_archive_config",
    },
  },
  appId: "a33671aa-24fd-4dcd-ba4b-5bbdbafe7690",
};

apiInstance
  .updateRUMArchiveConfig(params)
  .then((data: v2.RumArchiveConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
