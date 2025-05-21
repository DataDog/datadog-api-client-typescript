/**
 * Create tenancy config returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OCIIntegrationApi(configuration);

const params: v2.OCIIntegrationApiCreateTenancyConfigRequest = {
  body: {
    data: {
      attributes: {
        authCredentials: {
          fingerprint: "a7:b5:54:f2:da:a2:d7:b0:ed:f4:79:47:93:64:12:b1",
          privateKey:
            "-----BEGIN PRIVATE KEY-----\no9kEwoumo8yHVn5Ztp4F2cxaD6+MzSJ/I6WesPyePUD7sPeorXByg1UNOXyzqDub\n/aU4/sNo2f8epM9l7QGiCtY=\n-----END PRIVATE KEY-----",
        },
        configVersion: 2,
        homeRegion: "us-ashburn-1",
        logsConfig: {
          compartmentTagFilters: ["datadog:true", "env:prod"],
          enabled: true,
          enabledServices: ["oacnativeproduction"],
        },
        metricsConfig: {
          compartmentTagFilters: ["datadog:true", "env:prod"],
          enabled: true,
          excludedServices: ["oci_compute"],
        },
        resourceCollectionEnabled: true,
        userOcid: "ocid1.user.test",
      },
      id: "ocid1.tenancy.dummy_value",
      type: "oci_tenancy",
    },
  },
};

apiInstance
  .createTenancyConfig(params)
  .then((data: v2.TenancyConfig) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
