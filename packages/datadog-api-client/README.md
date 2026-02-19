# @datadog/datadog-api-client
## Description

This package contains the common code for the @datadog/datadog-api-client-{ serviceName } clients. See [Clients](#clients) section
for all available clients.

## Navigation

- [Usage](#usage)
  - [Authentication](#authentication)
  - [Unstable Endpoints](#unstable-endpoints)
  - [Changing Server](#changing-server)
  - [Disable compressed payloads](#disable-compressed-payloads)
  - [Enable requests logging](#enable-requests-logging)
  - [Enable retry](#enable-retry)
  - [Adding timeout to requests](#adding-timeout-to-requests)
  - [Pagination](#pagination)
  - [Zstd compression](#zstd-compression)
  - [Configure proxy](#configure-proxy)
- [Clients](#clients)

## Usage

```typescript
import { createConfiguration } from "@datadog/datadog-api-client";

const configuration = createConfiguration();
```

### Authentication

By default the library will use the `DD_API_KEY` and `DD_APP_KEY` environment variables to authenticate against the Datadog API.
To provide your own set of credentials, you need to set the appropriate keys on the configuration:

```typescript
import { createConfiguration } from '@datadog/datadog-api-client';
import { v1 } from '@datadog/datadog-api-client-monitors';

const configurationOpts = {
  authMethods: {
    apiKeyAuth: "<API KEY>",
    appKeyAuth: "<APPLICATION KEY>"
  },
};

const configuration = createConfiguration(configurationOpts);
const apiInstance = new v1.MonitorsApiV1(configuration);
```

### Unstable Endpoints

Clients can include access to Datadog API endpoints while they are in an unstable state and may undergo breaking changes. An extra configuration step is required to enable these endpoints:

```typescript
const configurationOpts = {
    unstableOperations: {
        "<api_name>.<version>.<operationName>": true
    }
}

const configuration = createConfiguration(configurationOpts);
```
- `<api_name>` is the name of the API client.
- `<version>` is the version of the API client.
- `<operationName>` is the name of the operation to enable.

#### Example:

```typescript
const configurationOpts = {
    unstableOperations: {
        "AWSIntegrationApi.v2.updateAWSAccount": true
    }
}

const configuration = createConfiguration(configurationOpts);
```

### Changing Server

When talking to a different server, like the `eu` instance, change the server variables:

```typescript
import { createConfiguration } from '@datadog/datadog-api-client';

const configurationOpts = {
    serverVariables: {
        "site": "datadoghq.eu"
    }
};

const configuration = createConfiguration(configurationOpts);
```

#### Changing Server on operations

Some operations may require a different server than the one specified in the configuration.
See individual services READMEs and `operationServers` property in the API client for more details.

```typescript
const configurationOpts = {
    operationServerIndices: {
        "LogsApi.v2.submitLog": 0
    },
    operationServerVariables: {
        "LogsApi.v2.submitLog": {
            "site": "datadoghq.eu"
        }
    }
};

const configuration = createConfiguration(configurationOpts);
```
### Disable compressed payloads

If you want to disable GZIP compressed responses, set the `compress` flag
on your configuration options:

```typescript
import { createConfiguration } from '@datadog/datadog-api-client';
const configurationOpts = {
  httpConfig: {
    compress: false
  },
};

const configuration = createConfiguration(configurationOpts);
```

### Enable requests logging

If you want to enable requests logging, set the `debug` flag on your configuration object:

```typescript
import { createConfiguration } from '@datadog/datadog-api-client';
const configurationOpts = {
  debug: true
};

const configuration = createConfiguration(configurationOpts);
```

### Enable retry 

To enable the client to retry when rate limited (status 429) or status 500 and above:

```typescript
import { createConfiguration } from '@datadog/datadog-api-client';
const configurationOpts = {
  enableRetry: true
};

const configuration = createConfiguration(configurationOpts);
```
The interval between 2 retry attempts will be the value of the x-ratelimit-reset response header when available. If not, it will be :

```typescript
(backoffMultiplier ** current_retry_count) * backoffBase
```
The maximum number of retry attempts is 3 by default and can be modified with

```typescript
maxRetries
```

### Adding timeout to requests

To add timeout or other mechanism to cancel requests, you need an abort
controller, for example the one implemented by
[abort-controller](https://www.npmjs.com/package/abort-controller). You can
then pass the `signal method to the HTTP configuration options:

```typescript
import { createConfiguration } from '@datadog/datadog-api-client';
import { v1 } from '@datadog/datadog-api-client-monitors'

import AbortController from 'abort-controller';

const controller = new AbortController();
const timeout = setTimeout(
  () => { controller.abort(); },
  1000,
);
const configurationOpts = {
  httpConfig: {
    signal: controller.signal
  },
};

const configuration = createConfiguration(configurationOpts);

const apiInstance = new v1.MonitorsApi(configuration);
apiInstance.listMonitors().then((data: v1.Monitor[]) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error)).finally(() => clearTimeout(timeout));
```

### Pagination

Several listing operations have a pagination method to help consume all the items available.
For example, to retrieve all your incidents:

```typescript
import { createConfiguration } from "@datadog/datadog-api-client";
import { v2 } from "@datadog/datadog-api-client-incidents";

async function main() {
  const configuration = createConfiguration();
  const configurationOpts = {
    unstableOperations: {
        "IncidentsApi.v2.listIncidents": true
    }
  }
  const configuration = createConfiguration(configurationOpts);
  const apiInstance = new v2.IncidentsApi(configuration);

  for await (const incident of apiInstance.listIncidentsWithPagination()) {
      console.log("Got incident " + incident.id);
  }
}

main();
```

### Zstd compression

Zstd compression support requires users to supply their own zstd compressor callback function.
The callback should accept string arg and return compressed Buffer data.
Callback signature `(body: string) => Buffer`.
For example, using `zstd.ts` package:

```typescript
import { compressSync } from 'zstd.ts'
import { createConfiguration } from "@datadog/datadog-api-client";
import { v2 } from "@datadog/datadog-api-client-metrics";

async function main() {
  const configurationOpts = {
    zstdCompressorCallback: (body: string) => compressSync({input: Buffer.from(body, "utf8")})
  }
  const configuration = createConfiguration(configurationOpts);
  const apiInstance = new v2.MetricsApi(configuration);
  const params: v2.MetricsApiSubmitMetricsRequest = {
      body: {
          series: [
              {
                  metric: "system.load.1",
                  type: 0,
                  points: [
                      {
                          timestamp: Math.round(new Date().getTime() / 1000),
                          value: 0.7,
                      },
                  ],
              },
          ],
      },
      contentEncoding: "zstd1",
  };

  apiInstance.submitMetrics(params).then((data: v2.IntakePayloadAccepted) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  }).catch((error: any) => console.error(error));
}

main();
```

### Configure proxy

You can provide custom `HttpLibrary` implementation with proxy support to `configuration` object. See example below:

```typescript
import pako from "pako";
import bufferFrom from "buffer-from";
import fetch from "node-fetch";
import { HttpsProxyAgent } from "https-proxy-agent";

import { createConfiguration, ResponseContext, RequestContext, HttpLibrary } from "@datadog/datadog-api-client";
import { v1 } from "@datadog/datadog-api-client";

const proxyAgent = new HttpsProxyAgent('http://127.0.0.11:3128');

class HttpLibraryWithProxy implements HttpLibrary {
    public debug = false;

    public send(request: RequestContext): Promise<ResponseContext> {
        const method = request.getHttpMethod().toString();
        let body = request.getBody();

        let compress = request.getHttpConfig().compress;
        if (compress === undefined) {
            compress = true;
        }

        const headers = request.getHeaders();
        if (typeof body === "string") {
            if (headers["Content-Encoding"] === "gzip") {
                body = bufferFrom(pako.gzip(body).buffer);
            } else if (headers["Content-Encoding"] === "deflate") {
                body = bufferFrom(pako.deflate(body).buffer);
            }
        }

        const resultPromise = fetch(request.getUrl(), {
            method: method,
            body: body as any,
            headers: headers,
            signal: request.getHttpConfig().signal,
            compress: compress,
            agent: proxyAgent,
        }).then((resp: any) => {
            const headers: { [name: string]: string } = {};
            resp.headers.forEach((value: string, name: string) => {
                headers[name] = value;
            });

            const body = {
                text: () => resp.text(),
                binary: () => resp.buffer(),
            };
            const response = new ResponseContext(resp.status, headers, body);
            return response;
        });

        return resultPromise;
    }
}

const configuration = createConfiguration({httpApi: new HttpLibraryWithProxy()});
const apiInstance = new v1.DashboardsApi(configuration);

apiInstance
    .listDashboards()
    .then((data: v1.DashboardSummary) => {
        console.log(
            "API called successfully. Returned data: " + JSON.stringify(data)
        );
    })
    .catch((error: any) => console.error(error));
```

## Clients

| Service | Package | README |
|---------|---------|--------|
| Action Connection | @datadog/datadog-api-client-action-connection | [README.md](../../services/action-connection/README.md) |
| Actions Datastores | @datadog/datadog-api-client-actions-datastores | [README.md](../../services/actions-datastores/README.md) |
| Agentless Scanning | @datadog/datadog-api-client-agentless-scanning | [README.md](../../services/agentless-scanning/README.md) |
| API Management | @datadog/datadog-api-client-api-management | [README.md](../../services/api-management/README.md) |
| APM | @datadog/datadog-api-client-apm | [README.md](../../services/apm/README.md) |
| APM Retention Filters | @datadog/datadog-api-client-apm-retention-filters | [README.md](../../services/apm-retention-filters/README.md) |
| App Builder | @datadog/datadog-api-client-app-builder | [README.md](../../services/app-builder/README.md) |
| Application Security | @datadog/datadog-api-client-application-security | [README.md](../../services/application-security/README.md) |
| Audit | @datadog/datadog-api-client-audit | [README.md](../../services/audit/README.md) |
| Authentication | @datadog/datadog-api-client-authentication | [README.md](../../services/authentication/README.md) |
| AuthN Mappings | @datadog/datadog-api-client-auth-n-mappings | [README.md](../../services/auth-n-mappings/README.md) |
| AWS Integration | @datadog/datadog-api-client-aws-integration | [README.md](../../services/aws-integration/README.md) |
| AWS Logs Integration | @datadog/datadog-api-client-aws-logs-integration | [README.md](../../services/aws-logs-integration/README.md) |
| Azure Integration | @datadog/datadog-api-client-azure-integration | [README.md](../../services/azure-integration/README.md) |
| Case Management | @datadog/datadog-api-client-case-management | [README.md](../../services/case-management/README.md) |
| Case Management Attribute | @datadog/datadog-api-client-case-management-attribute | [README.md](../../services/case-management-attribute/README.md) |
| Case Management Type | @datadog/datadog-api-client-case-management-type | [README.md](../../services/case-management-type/README.md) |
| Change Management | @datadog/datadog-api-client-change-management | [README.md](../../services/change-management/README.md) |
| CI Visibility Pipelines | @datadog/datadog-api-client-ci-visibility-pipelines | [README.md](../../services/ci-visibility-pipelines/README.md) |
| CI Visibility Tests | @datadog/datadog-api-client-ci-visibility-tests | [README.md](../../services/ci-visibility-tests/README.md) |
| Cloud Authentication | @datadog/datadog-api-client-cloud-authentication | [README.md](../../services/cloud-authentication/README.md) |
| Cloud Cost Management | @datadog/datadog-api-client-cloud-cost-management | [README.md](../../services/cloud-cost-management/README.md) |
| Cloud Network Monitoring | @datadog/datadog-api-client-cloud-network-monitoring | [README.md](../../services/cloud-network-monitoring/README.md) |
| Cloudflare Integration | @datadog/datadog-api-client-cloudflare-integration | [README.md](../../services/cloudflare-integration/README.md) |
| Code Coverage | @datadog/datadog-api-client-code-coverage | [README.md](../../services/code-coverage/README.md) |
| Confluent Cloud | @datadog/datadog-api-client-confluent-cloud | [README.md](../../services/confluent-cloud/README.md) |
| Container Images | @datadog/datadog-api-client-container-images | [README.md](../../services/container-images/README.md) |
| Containers | @datadog/datadog-api-client-containers | [README.md](../../services/containers/README.md) |
| CSM Agents | @datadog/datadog-api-client-csm-agents | [README.md](../../services/csm-agents/README.md) |
| CSM Coverage Analysis | @datadog/datadog-api-client-csm-coverage-analysis | [README.md](../../services/csm-coverage-analysis/README.md) |
| CSM Threats | @datadog/datadog-api-client-csm-threats | [README.md](../../services/csm-threats/README.md) |
| Dashboard Lists | @datadog/datadog-api-client-dashboard-lists | [README.md](../../services/dashboard-lists/README.md) |
| Dashboards | @datadog/datadog-api-client-dashboards | [README.md](../../services/dashboards/README.md) |
| Data Deletion | @datadog/datadog-api-client-data-deletion | [README.md](../../services/data-deletion/README.md) |
| Datasets | @datadog/datadog-api-client-datasets | [README.md](../../services/datasets/README.md) |
| Deployment Gates | @datadog/datadog-api-client-deployment-gates | [README.md](../../services/deployment-gates/README.md) |
| Domain Allowlist | @datadog/datadog-api-client-domain-allowlist | [README.md](../../services/domain-allowlist/README.md) |
| DORA Metrics | @datadog/datadog-api-client-dora-metrics | [README.md](../../services/dora-metrics/README.md) |
| Downtimes | @datadog/datadog-api-client-downtimes | [README.md](../../services/downtimes/README.md) |
| Entity Risk Scores | @datadog/datadog-api-client-entity-risk-scores | [README.md](../../services/entity-risk-scores/README.md) |
| Error Tracking | @datadog/datadog-api-client-error-tracking | [README.md](../../services/error-tracking/README.md) |
| Events | @datadog/datadog-api-client-events | [README.md](../../services/events/README.md) |
| Fastly Integration | @datadog/datadog-api-client-fastly-integration | [README.md](../../services/fastly-integration/README.md) |
| Fleet Automation | @datadog/datadog-api-client-fleet-automation | [README.md](../../services/fleet-automation/README.md) |
| GCP Integration | @datadog/datadog-api-client-gcp-integration | [README.md](../../services/gcp-integration/README.md) |
| High Availability MultiRegion | @datadog/datadog-api-client-high-availability-multi-region | [README.md](../../services/high-availability-multi-region/README.md) |
| Hosts | @datadog/datadog-api-client-hosts | [README.md](../../services/hosts/README.md) |
| Incident Services | @datadog/datadog-api-client-incident-services | [README.md](../../services/incident-services/README.md) |
| Incident Teams | @datadog/datadog-api-client-incident-teams | [README.md](../../services/incident-teams/README.md) |
| Incidents | @datadog/datadog-api-client-incidents | [README.md](../../services/incidents/README.md) |
| IP Allowlist | @datadog/datadog-api-client-ip-allowlist | [README.md](../../services/ip-allowlist/README.md) |
| IP Ranges | @datadog/datadog-api-client-ip-ranges | [README.md](../../services/ip-ranges/README.md) |
| Jira Integration | @datadog/datadog-api-client-jira-integration | [README.md](../../services/jira-integration/README.md) |
| Key Management | @datadog/datadog-api-client-key-management | [README.md](../../services/key-management/README.md) |
| Logs | @datadog/datadog-api-client-logs | [README.md](../../services/logs/README.md) |
| Logs Archives | @datadog/datadog-api-client-logs-archives | [README.md](../../services/logs-archives/README.md) |
| Logs Custom Destinations | @datadog/datadog-api-client-logs-custom-destinations | [README.md](../../services/logs-custom-destinations/README.md) |
| Logs Indexes | @datadog/datadog-api-client-logs-indexes | [README.md](../../services/logs-indexes/README.md) |
| Logs Metrics | @datadog/datadog-api-client-logs-metrics | [README.md](../../services/logs-metrics/README.md) |
| Logs Pipelines | @datadog/datadog-api-client-logs-pipelines | [README.md](../../services/logs-pipelines/README.md) |
| Logs Restriction Queries | @datadog/datadog-api-client-logs-restriction-queries | [README.md](../../services/logs-restriction-queries/README.md) |
| Metrics | @datadog/datadog-api-client-metrics | [README.md](../../services/metrics/README.md) |
| Microsoft Teams Integration | @datadog/datadog-api-client-microsoft-teams-integration | [README.md](../../services/microsoft-teams-integration/README.md) |
| Monitors | @datadog/datadog-api-client-monitors | [README.md](../../services/monitors/README.md) |
| Network Device Monitoring | @datadog/datadog-api-client-network-device-monitoring | [README.md](../../services/network-device-monitoring/README.md) |
| Notebooks | @datadog/datadog-api-client-notebooks | [README.md](../../services/notebooks/README.md) |
| Observability Pipelines | @datadog/datadog-api-client-observability-pipelines | [README.md](../../services/observability-pipelines/README.md) |
| OCI Integration | @datadog/datadog-api-client-oci-integration | [README.md](../../services/oci-integration/README.md) |
| Okta Integration | @datadog/datadog-api-client-okta-integration | [README.md](../../services/okta-integration/README.md) |
| On-Call | @datadog/datadog-api-client-on-call | [README.md](../../services/on-call/README.md) |
| On-Call Paging | @datadog/datadog-api-client-on-call-paging | [README.md](../../services/on-call-paging/README.md) |
| Opsgenie Integration | @datadog/datadog-api-client-opsgenie-integration | [README.md](../../services/opsgenie-integration/README.md) |
| Org Connections | @datadog/datadog-api-client-org-connections | [README.md](../../services/org-connections/README.md) |
| Organizations | @datadog/datadog-api-client-organizations | [README.md](../../services/organizations/README.md) |
| PagerDuty Integration | @datadog/datadog-api-client-pager-duty-integration | [README.md](../../services/pager-duty-integration/README.md) |
| Powerpack | @datadog/datadog-api-client-powerpack | [README.md](../../services/powerpack/README.md) |
| Processes | @datadog/datadog-api-client-processes | [README.md](../../services/processes/README.md) |
| Product Analytics | @datadog/datadog-api-client-product-analytics | [README.md](../../services/product-analytics/README.md) |
| Reference Tables | @datadog/datadog-api-client-reference-tables | [README.md](../../services/reference-tables/README.md) |
| Restriction Policies | @datadog/datadog-api-client-restriction-policies | [README.md](../../services/restriction-policies/README.md) |
| Roles | @datadog/datadog-api-client-roles | [README.md](../../services/roles/README.md) |
| RUM | @datadog/datadog-api-client-rum | [README.md](../../services/rum/README.md) |
| Rum Audience Management | @datadog/datadog-api-client-rum-audience-management | [README.md](../../services/rum-audience-management/README.md) |
| Rum Metrics | @datadog/datadog-api-client-rum-metrics | [README.md](../../services/rum-metrics/README.md) |
| Rum Replay Heatmaps | @datadog/datadog-api-client-rum-replay-heatmaps | [README.md](../../services/rum-replay-heatmaps/README.md) |
| Rum Replay Playlists | @datadog/datadog-api-client-rum-replay-playlists | [README.md](../../services/rum-replay-playlists/README.md) |
| Rum Replay Sessions | @datadog/datadog-api-client-rum-replay-sessions | [README.md](../../services/rum-replay-sessions/README.md) |
| Rum Replay Viewership | @datadog/datadog-api-client-rum-replay-viewership | [README.md](../../services/rum-replay-viewership/README.md) |
| Rum Retention Filters | @datadog/datadog-api-client-rum-retention-filters | [README.md](../../services/rum-retention-filters/README.md) |
| Seats | @datadog/datadog-api-client-seats | [README.md](../../services/seats/README.md) |
| Security Monitoring | @datadog/datadog-api-client-security-monitoring | [README.md](../../services/security-monitoring/README.md) |
| Sensitive Data Scanner | @datadog/datadog-api-client-sensitive-data-scanner | [README.md](../../services/sensitive-data-scanner/README.md) |
| Service Accounts | @datadog/datadog-api-client-service-accounts | [README.md](../../services/service-accounts/README.md) |
| Service Checks | @datadog/datadog-api-client-service-checks | [README.md](../../services/service-checks/README.md) |
| Service Definition | @datadog/datadog-api-client-service-definition | [README.md](../../services/service-definition/README.md) |
| Service Level Objective Corrections | @datadog/datadog-api-client-service-level-objective-corrections | [README.md](../../services/service-level-objective-corrections/README.md) |
| Service Level Objectives | @datadog/datadog-api-client-service-level-objectives | [README.md](../../services/service-level-objectives/README.md) |
| Service Scorecards | @datadog/datadog-api-client-service-scorecards | [README.md](../../services/service-scorecards/README.md) |
| ServiceNow Integration | @datadog/datadog-api-client-service-now-integration | [README.md](../../services/service-now-integration/README.md) |
| Slack Integration | @datadog/datadog-api-client-slack-integration | [README.md](../../services/slack-integration/README.md) |
| Snapshots | @datadog/datadog-api-client-snapshots | [README.md](../../services/snapshots/README.md) |
| Software Catalog | @datadog/datadog-api-client-software-catalog | [README.md](../../services/software-catalog/README.md) |
| Spa | @datadog/datadog-api-client-spa | [README.md](../../services/spa/README.md) |
| Spans | @datadog/datadog-api-client-spans | [README.md](../../services/spans/README.md) |
| Spans Metrics | @datadog/datadog-api-client-spans-metrics | [README.md](../../services/spans-metrics/README.md) |
| Static Analysis | @datadog/datadog-api-client-static-analysis | [README.md](../../services/static-analysis/README.md) |
| Status Pages | @datadog/datadog-api-client-status-pages | [README.md](../../services/status-pages/README.md) |
| Synthetics | @datadog/datadog-api-client-synthetics | [README.md](../../services/synthetics/README.md) |
| Tags | @datadog/datadog-api-client-tags | [README.md](../../services/tags/README.md) |
| Teams | @datadog/datadog-api-client-teams | [README.md](../../services/teams/README.md) |
| Test Optimization | @datadog/datadog-api-client-test-optimization | [README.md](../../services/test-optimization/README.md) |
| Usage Metering | @datadog/datadog-api-client-usage-metering | [README.md](../../services/usage-metering/README.md) |
| Users | @datadog/datadog-api-client-users | [README.md](../../services/users/README.md) |
| Webhooks Integration | @datadog/datadog-api-client-webhooks-integration | [README.md](../../services/webhooks-integration/README.md) |
| Workflow Automation | @datadog/datadog-api-client-workflow-automation | [README.md](../../services/workflow-automation/README.md) |