/**
 * Update a Statuspage URL setting returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatuspageIntegrationApi(configuration);

const params: v2.StatuspageIntegrationApiUpdateStatuspageUrlSettingRequest = {
  body: {
    data: {
      attributes: {
        customTags: "team:collaboration-integrations,env:prod",
        url: "https://example.statuspage.io",
      },
      id: "596da4af-0563-4097-90ff-07230c3f9db3",
      type: "statuspage-url-setting",
    },
  },
  statuspageUrlSettingId: "statuspage_url_setting_id",
};

apiInstance
  .updateStatuspageUrlSetting(params)
  .then((data: v2.StatuspageUrlSettingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
