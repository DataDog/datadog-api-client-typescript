# App and API Protection

`@datadog/datadog-api-client-app-api-protection`

## Description

App and API Protection WAF rules, exclusion filters and policies.

Products: App and API Protection

[Datadog Application Security](https://docs.datadoghq.com/security/application_security/) provides protection against
application-level attacks that aim to exploit code-level vulnerabilities,
such as Server-Side-Request-Forgery (SSRF), SQL injection, Log4Shell, and
Reflected Cross-Site-Scripting (XSS). You can monitor and protect apps
hosted directly on a server, Docker, Kubernetes, Amazon ECS, and (for
supported languages) AWS Fargate.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-app-api-protection
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-app-api-protection
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-app-api-protection";

const configuration = createConfiguration();
const apiInstance = new v2.ApplicationSecurityApi(configuration);

apiInstance.listApplicationSecurityWAFCustomRules().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```