/**
 * Create or update entity integration configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateEntityIntegrationConfig"] = true;
const apiInstance = new v2.EntityIntegrationConfigsApi(configuration);

const params: v2.EntityIntegrationConfigsApiUpdateEntityIntegrationConfigRequest =
  {
    body: {
      data: {
        attributes: {
          config: {
            enabled_repos:
              "[{'github_org_name': 'myorg', 'hostname': 'github.com', 'repo_name': 'myrepo'}]",
          },
        },
        type: "entity_integration_config_requests",
      },
    },
    integrationId: "github",
  };

apiInstance
  .updateEntityIntegrationConfig(params)
  .then((data: v2.EntityIntegrationConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
