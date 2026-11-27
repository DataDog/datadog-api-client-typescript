/**
 * Create or update an archive configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMManagedArchivesApi(configuration);

// there is a valid "rum_application" in the system
const RUM_APPLICATION_DATA_ID = process.env.RUM_APPLICATION_DATA_ID as string;

const params: v2.RUMManagedArchivesApiUpdateRUMArchiveConfigRequest = {
  body: {
    data: {
      attributes: {
        enabled: true,
        retentionDays: 90,
      },
      id: RUM_APPLICATION_DATA_ID,
      type: "rum_archive_config",
    },
  },
  appId: RUM_APPLICATION_DATA_ID,
};

apiInstance
  .updateRUMArchiveConfig(params)
  .then((data: v2.RumArchiveConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
