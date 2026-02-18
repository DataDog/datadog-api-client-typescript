/**
 * Accept recommended entities in bulk returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.acceptRecommendedEntities"] = true;
const apiInstance = new v2.SoftwareCatalogApi(configuration);

const params: v2.SoftwareCatalogApiAcceptRecommendedEntitiesRequest = {
  body: [
    {
      id: "123abc456def",
      schema: {
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
          componentOf: [],
          dependsOn: [],
          languages: [],
        },
      },
    },
  ],
};

apiInstance
  .acceptRecommendedEntities(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
