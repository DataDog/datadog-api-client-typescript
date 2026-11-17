# Cloud Provider Integrations

`@datadog/datadog-api-client-cloud-integrations`

## Description

AWS, Azure, Google Cloud and Oracle Cloud integrations, including the Cloud Cost configuration of AWS accounts.

Products: Integrations

Configure your Datadog-AWS integration directly through the Datadog API.
For more information, see the [AWS integration page](https://docs.datadoghq.com/integrations/amazon_web_services).

Configure your Datadog-AWS-Logs integration directly through Datadog API.
For more information, see the [AWS integration page](https://docs.datadoghq.com/integrations/amazon_web_services/#log-collection).

Configure your Datadog-Google Cloud Platform (GCP) integration directly
through the Datadog API. Read more about the [Datadog-Google Cloud Platform integration](https://docs.datadoghq.com/integrations/google_cloud_platform).

Auto-generated tag OCI Integration

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-cloud-integrations
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-cloud-integrations
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-cloud-integrations";

const configuration = createConfiguration();
const apiInstance = new v2.AWSIntegrationApi(configuration);
const params = {/* parameters */};

apiInstance.listAWSAccounts(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```