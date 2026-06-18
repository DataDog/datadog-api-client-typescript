/**
 * Update a RUM SDK configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateRumSdkConfig"] = true;
const apiInstance = new v2.RUMRemoteConfigApi(configuration);

const params: v2.RUMRemoteConfigApiUpdateRumSdkConfigRequest = {
  body: {
    data: {
      attributes: {
        rum: {
          allowedTracingUrls: [
            {
              match: {
                rcSerializedType: "string",
                value: "https://app.datadoghq.com",
              },
              propagatorTypes: ["datadog", "tracecontext"],
            },
          ],
          allowedTrackingOrigins: [
            {
              rcSerializedType: "string",
              value: "https://app.datadoghq.com",
            },
          ],
          context: [
            {
              key: "id",
              value: {
                attribute: "data-version",
                extractor: {
                  rcSerializedType: "regex",
                  value: "^https://app-.*.datadoghq.com",
                },
                key: "app.version",
                name: "app_version",
                path: "application.version",
                rcSerializedType: "dynamic",
                selector: "#app-version",
                strategy: "js",
              },
            },
          ],
          defaultPrivacyLevel: "mask",
          enablePrivacyForActionName: true,
          env: "production",
          service: "my-service",
          sessionReplaySampleRate: 20,
          sessionSampleRate: 75,
          traceSampleRate: 100,
          trackSessionAcrossSubdomains: false,
          user: [
            {
              key: "id",
              value: {
                attribute: "data-version",
                extractor: {
                  rcSerializedType: "regex",
                  value: "^https://app-.*.datadoghq.com",
                },
                key: "app.version",
                name: "app_version",
                path: "application.version",
                rcSerializedType: "dynamic",
                selector: "#app-version",
                strategy: "js",
              },
            },
          ],
          version: {
            attribute: "data-version",
            extractor: {
              rcSerializedType: "regex",
              value: "^https://app-.*.datadoghq.com",
            },
            key: "app.version",
            name: "app_version",
            path: "application.version",
            rcSerializedType: "dynamic",
            selector: "#app-version",
            strategy: "js",
          },
        },
      },
      id: "abc12345-1234-5678-abcd-ef1234567890",
      type: "rum_sdk_config",
    },
  },
  configId: "config_id",
};

apiInstance
  .updateRumSdkConfig(params)
  .then((data: v2.RumSdkConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
