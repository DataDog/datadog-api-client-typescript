/**
 * Create or update entities returns "ACCEPTED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SoftwareCatalogApi(configuration);

const params: v2.SoftwareCatalogApiUpsertCatalogEntityRequest = {
  body: {
    apiVersion: "v3",
    datadog: {
      codeLocations: [
        {
          paths: [],
        },
      ],
      events: [{}],
      logs: [{}],
      performanceData: {
        tags: [],
      },
      pipelines: {
        fingerprints: [],
      },
    },
    integrations: {
      opsgenie: {
        serviceUrl: "https://www.opsgenie.com/service/shopping-cart",
      },
      pagerduty: {
        serviceUrl:
          "https://www.pagerduty.com/service-directory/Pshopping-cart",
      },
    },
    kind: "service",
    metadata: {
      additionalOwners: [
        {
          name: "",
        },
      ],
      contacts: [
        {
          contact: "https://slack/",
          type: "slack",
        },
      ],
      id: "4b163705-23c0-4573-b2fb-f6cea2163fcb",
      inheritFrom: "application:default/myapp",
      links: [
        {
          name: "mylink",
          type: "link",
          url: "https://mylink",
        },
      ],
      name: "myService",
      namespace: "default",
      tags: ["this:tag", "that:tag"],
    },
    spec: {
      dependsOn: [],
      languages: [],
    },
  },
};

apiInstance
  .upsertCatalogEntity(params)
  .then((data: v2.UpsertCatalogEntityResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
