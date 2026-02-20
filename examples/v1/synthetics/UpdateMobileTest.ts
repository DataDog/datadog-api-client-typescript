/**
 * Edit a mobile test returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiUpdateMobileTestRequest = {
  body: {
    config: {
      variables: [
        {
          name: "VARIABLE_NAME",
          secure: false,
          type: "text",
        },
      ],
    },
    deviceIds: ["chrome.laptop_large"],
    message: "Notification message",
    name: "Example test name",
    options: {
      bindings: [
        {
          principals: [],
          relation: "editor",
        },
      ],
      ci: {
        executionRule: "blocking",
      },
      deviceIds: ["synthetics:mobile:device:apple_ipad_10th_gen_2022_ios_16"],
      mobileApplication: {
        applicationId: "00000000-0000-0000-0000-aaaaaaaaaaaa",
        referenceId: "00000000-0000-0000-0000-aaaaaaaaaaab",
        referenceType: "latest",
      },
      monitorOptions: {
        notificationPresetName: "show_all",
      },
      restrictedRoles: ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"],
      retry: {},
      scheduling: {
        timeframes: [
          {
            day: 1,
            from: "07:00",
            to: "16:00",
          },
          {
            day: 3,
            from: "07:00",
            to: "16:00",
          },
        ],
        timezone: "America/New_York",
      },
      tickEvery: 300,
    },
    status: "live",
    steps: [
      {
        name: "",
        params: {
          check: "equals",
          direction: "up",
          element: {
            contextType: "native",
            relativePosition: {},
            userLocator: {
              values: [
                {
                  type: "accessibility-id",
                },
              ],
            },
          },
          positions: [{}],
          variable: {
            example: "",
            name: "VAR_NAME",
          },
        },
        publicId: "pub-lic-id0",
        type: "assertElementContent",
      },
    ],
    tags: ["env:production"],
    type: "mobile",
  },
  publicId: "public_id",
};

apiInstance
  .updateMobileTest(params)
  .then((data: v1.SyntheticsMobileTest) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
