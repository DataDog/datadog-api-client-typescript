/**
 * Create or update service definition using schema v2-1 returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ServiceDefinitionApi(configuration);

const params: v2.ServiceDefinitionApiCreateOrUpdateServiceDefinitionsRequest = {
  body: {
    contacts: [
      {
        contact: "contact@datadoghq.com",
        name: "Team Email",
        type: "email",
      },
    ],
    ddService: "service-exampleservicedefinition",
    extensions: {
      myorgextension: "extensionvalue",
    },
    integrations: {
      opsgenie: {
        region: "US",
        serviceUrl:
          "https://my-org.opsgenie.com/service/123e4567-e89b-12d3-a456-426614174000",
      },
      pagerduty: {
        serviceUrl: "https://my-org.pagerduty.com/service-directory/PMyService",
      },
    },
    links: [
      {
        name: "Runbook",
        type: "runbook",
        url: "https://my-runbook",
      },
      {
        name: "Source Code",
        type: "repo",
        provider: "GitHub",
        url: "https://github.com/DataDog/schema",
      },
      {
        name: "Architecture",
        type: "doc",
        provider: "Gigoogle drivetHub",
        url: "https://my-runbook",
      },
    ],
    schemaVersion: "v2.1",
    tags: ["my:tag", "service:tag"],
    team: "my-team",
  },
};

apiInstance
  .createOrUpdateServiceDefinitions(params)
  .then((data: v2.ServiceDefinitionCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
