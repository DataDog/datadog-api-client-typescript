/**
 * Update degradation template returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);

const params: v2.StatusPagesApiUpdateDegradationTemplateRequest = {
  body: {
    data: {
      attributes: {
        componentsAffected: [
          {
            id: "",
            status: "operational",
          },
        ],
        updates: [
          {
            status: "investigating",
          },
        ],
      },
      id: "",
      type: "degradation_templates",
    },
  },
  templateId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  pageId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .updateDegradationTemplate(params)
  .then((data: v2.DegradationTemplate) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
