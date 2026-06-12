/**
 * Update the maximum session duration returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OrganizationsApi(configuration);

const params: v2.OrganizationsApiUpdateLoginOrgConfigsMaxSessionDurationRequest =
  {
    body: {
      data: {
        attributes: {
          maxSessionDuration: 604800,
        },
        type: "max_session_duration",
      },
    },
  };

apiInstance
  .updateLoginOrgConfigsMaxSessionDuration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
