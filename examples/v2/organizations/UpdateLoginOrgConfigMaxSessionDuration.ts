/**
 * Update maximum session duration returns "No Content - The maximum session duration was successfully updated." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateLoginOrgConfigMaxSessionDuration"] =
  true;
const apiInstance = new v2.OrganizationsApi(configuration);

const params: v2.OrganizationsApiUpdateLoginOrgConfigMaxSessionDurationRequest =
  {
    body: {
      data: {
        attributes: {
          maxSessionDuration: 60,
        },
        type: "max_session_duration",
      },
    },
  };

apiInstance
  .updateLoginOrgConfigMaxSessionDuration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
