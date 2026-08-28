/**
 * Ingest STIX threat intelligence returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.addSTIXThreatIntel"] = true;
const apiInstance = new v2.ThreatIntelligenceApi(configuration);

const params: v2.ThreatIntelligenceApiAddSTIXThreatIntelRequest = {
  body: {
    id: "bundle--44444444-4444-4444-8444-444444444444",
    objects: [
      {
        created: new Date(2026, 7, 22, 12, 0, 0, 0),
        id: "indicator--55555555-5555-4555-8555-555555555555",
        modified: new Date(2026, 7, 22, 12, 0, 0, 0),
        pattern: "[ipv4-addr:value = '198.51.100.42']",
        patternType: "stix",
        specVersion: "2.1",
        type: "indicator",
        validFrom: new Date(2026, 7, 22, 12, 0, 0, 0),
      },
    ],
    specVersion: "2.1",
    type: "bundle",
  },
  tiVendor: "Acme-Inc",
};

apiInstance
  .addSTIXThreatIntel(params)
  .then((data: v2.STIXIngestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
