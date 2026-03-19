/**
 * Import vulnerabilities returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.importSecurityVulnerabilities"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiImportSecurityVulnerabilitiesRequest = {
  body: {
    bomFormat: "CycloneDX",
    components: [
      {
        bomRef: "a3390fca-c315-41ae-ae05-af5e7859cdee",
        name: "lodash",
        purl: "pkg:npm/lodash@4.17.21",
        type: "library",
        version: "4.17.21",
      },
    ],
    metadata: {
      component: {
        bomRef: "asset-ref-123",
        name: "i-12345",
        type: "operating-system",
      },
      tools: {
        components: [
          {
            name: "my-scanner",
            type: "application",
          },
        ],
      },
    },
    specVersion: "1.5",
    version: 1,
    vulnerabilities: [
      {
        advisories: [
          {
            url: "https://example.com/advisory/CVE-2021-1234",
          },
        ],
        affects: [
          {
            ref: "a3390fca-c315-41ae-ae05-af5e7859cdee",
          },
        ],
        cwes: [123, 345],
        description: "Sample vulnerability detected in the application.",
        detail: "Details about the vulnerability",
        id: "CVE-2021-1234",
        ratings: [
          {
            score: 9.0,
            severity: "high",
            vector: "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:N",
          },
        ],
        references: [
          {
            id: "GHSA-35m5-8cvj-8783",
            source: {
              url: "https://example.com",
            },
          },
        ],
      },
    ],
  },
};

apiInstance
  .importSecurityVulnerabilities(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
