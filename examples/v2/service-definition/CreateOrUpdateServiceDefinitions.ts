/**
 * Create or update service definition returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ServiceDefinitionApi(configuration);

const params: v2.ServiceDefinitionApiCreateOrUpdateServiceDefinitionsRequest = {
  body: {
    application: "my-app",
    ciPipelineFingerprints: ["j88xdEy0J5lc", "eZ7LMljCk8vo"],
    contacts: [
      {
        contact: "contact@datadoghq.com",
        name: "Team Email",
        type: "email",
      },
    ],
    ddService: "my-service",
    description: "My service description",
    extensions: {
      "myorg/extension": "extensionValue",
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
    lifecycle: "sandbox",
    links: [
      {
        name: "Runbook",
        provider: "Github",
        type: "runbook",
        url: "https://my-runbook",
      },
    ],
    schemaVersion: "v2.1",
    tags: ["my:tag", "service:tag"],
    team: "my-team",
    tier: "High",
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
