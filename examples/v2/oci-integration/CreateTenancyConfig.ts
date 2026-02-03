/**
 * Create tenancy config returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createTenancyConfig"] = true;
const apiInstance = new v2.OCIIntegrationApi(configuration);

const params: v2.OCIIntegrationApiCreateTenancyConfigRequest = {
  body: {
    data: {
      attributes: {
        authCredentials: {
          fingerprint: "",
          privateKey:
            "----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCdvSMmlfLyeD4M\nQsA3WlrWBqKdWa5eVV3/uODyqT3wWMEMIJHcG3/quNs8nh9xrK1/JkQT2qoKEHqR\nC5k59jN6Vp8em8ARJthMgam9K37ELt+IQ/G8ySTSuqZG8T4cHp/cs3fAclNqttOl\nYnGr4RbVAgMBAAECggEAGZNLGbyCUbIRTW6Kh4d8ZVC+eZtJMqGmGJ3KfVaW8Pjn\nQGWfSuJCEe2o2Y8G3phlidFauICnZ44enXA17Rhi+I/whnr7FIyQk2bR7rv+1Uhc\nmOJygWX5eFFMsledgVAdIAl9Luk2nykx7Un3g6rtbl/Vs+5k4m7ITLFMpCHzsJLU\nnm8kBzDOqY2JUkMd08nL88KL6QywWtal05UESzQpNFXd0e5kxYfexeMCsLsWP0mc\nquMLRbn7NuBjCbe9VU2kmIvcfDDaWjurT7d5m1OXx1cc8p6P4PFZTVyCjdhiWOr3\nLQXZ4/vdZNR3zgEHypRoM6D9Yq99LWUOUEMrdiSLQQKBgQDQkh7C1OtAXnpy7F6R\nW+/I3zBHici2p7A57UT7VECQ1IVGg37/uus83DkuOtdZ33JmHLAVrwLFJvUlbyjx\nl6dc/1ms40L5HFdLgaVtd4k0rSPFeOSDr6evz0lX4yBuzlP0fEh+o3XHW7mwe2G+\nrWCULF/Uqza66fjbCSKMNgLIXQKBgQDBm9nZg/s4S0THWCFNWcB1tXBG0p/sH5eY\nPC1H/VmTEINIixStrS4ufczf31X8rcoSjSbO7+vZDTTATdk7OLn1I2uGFVYl8M59\n86BYT2Hi7cwp7YVzOc/cJigVeBAqSRW/iYYyWBEUTiW1gbkV0sRWwhPp67m+c0sP\nXpY/iEZA2QKBgB1w8tynt4l/jKNaUEMOijt9ndALWATIiOy0XG9pxi9rgGCiwTOS\nDBCsOXoYHjv2eayGUijNaoOv6xzcoxfvQ1WySdNIxTRq1ru20kYwgHKqGgmO9hrM\nmcwMY5r/WZ2qjFlPjeAqbL62aPDLidGjoaVo2iIoBPK/gjxQ/5f0MS4N/YQ0zWoYBueSQ0DGs\n-----END PRIVATE KEY-----",
        },
        configVersion: undefined,
        costCollectionEnabled: true,
        ddCompartmentId: "ocid.compartment.test",
        ddStackId: "ocid.stack.test",
        homeRegion: "us-ashburn-1",
        logsConfig: {
          compartmentTagFilters: ["datadog:true", "env:prod"],
          enabled: true,
          enabledServices: ["service_1", "service_1"],
        },
        metricsConfig: {
          compartmentTagFilters: ["datadog:true", "env:prod"],
          enabled: true,
          excludedServices: ["service_1", "service_1"],
        },
        regionsConfig: {
          available: ["us-ashburn-1", "us-phoenix-1"],
          disabled: ["us-phoenix-1"],
          enabled: ["us-ashburn-1"],
        },
        resourceCollectionEnabled: true,
        userOcid: "ocid.user.test",
      },
      id: "ocid.tenancy.test",
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
