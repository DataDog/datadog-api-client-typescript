/**
 * Create a widget returns "Successful Response" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WidgetsApi(configuration);

const params: v2.WidgetsApiCreateWidgetApiV2WidgetsExperienceTypePostRequest = {
  body: {
    data: {
      attributes: {
        definition: {
          title: "My Timeseries Widget",
          type: "timeseries",
        },
        tags: [],
      },
      links: {},
      type: "",
    },
    errors: [
      {
        links: {
          about: "",
        },
        source: {},
      },
    ],
    included: [
      {
        id: "",
        links: {},
        type: "",
      },
    ],
    links: {},
  },
  experienceType: "ccm_reports",
};

apiInstance
  .createWidgetApiV2WidgetsExperienceTypePost(params)
  .then((data: v2.WidgetSchemaJSONAPIDocument) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
