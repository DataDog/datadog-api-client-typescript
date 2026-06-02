/**
 * Create a Statuspage URL setting returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatuspageIntegrationApi(configuration);

const params: v2.StatuspageIntegrationApiCreateStatuspageUrlSettingRequest = {
  body: {
    data: {
      attributes: {
        customTags: "team:collaboration-integrations,env:prod",
        url: "https://example.statuspage.io",
      },
      type: "statuspage-url-setting",
    },
  },
};

apiInstance
  .createStatuspageUrlSetting(params)
  .then((data: v2.StatuspageUrlSettingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
