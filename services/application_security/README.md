# @datadog/datadog-api-client-application-security

## Description

[Datadog Application Security](https://docs.datadoghq.com/security/application_security/) provides protection against
application-level attacks that aim to exploit code-level vulnerabilities,
such as Server-Side-Request-Forgery (SSRF), SQL injection, Log4Shell, and
Reflected Cross-Site-Scripting (XSS). You can monitor and protect apps
hosted directly on a server, Docker, Kubernetes, Amazon ECS, and (for
supported languages) AWS Fargate.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-application-security
# Yarn
yarn add @datadog/datadog-api-client-application-security
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ApplicationSecurityApiV2 } from "@datadog/datadog-api-client-application-security";
import { v2 } from "@datadog/datadog-api-client-application-security";

const configuration = createConfiguration();
const apiInstance = new ApplicationSecurityApiV2(configuration);

apiInstance.listApplicationSecurityWAFCustomRules().then((data: v2.ApplicationSecurityWafCustomRuleListResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```