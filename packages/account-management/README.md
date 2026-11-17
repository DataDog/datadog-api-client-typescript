# Account Management

`@datadog/datadog-api-client-account-management`

## Description

Users, roles, service accounts, API and application keys, SAML and login settings, authorized clients, access restrictions, data access controls and organization settings.

Products: Account Management

[The AuthN Mappings API](https://docs.datadoghq.com/account_management/authn_mapping/?tab=example)
is used to automatically map groups of users to roles in Datadog using attributes
sent from Identity Providers. Use these endpoints to manage your AuthN Mappings.

Configure AWS, GitHub, and Custom OIDC cloud authentication for persona and intake authentication through the Datadog API.

Programmatic management of a customer's Datadog organization. Use this API to perform
self-service organization lifecycle actions such as disabling the authenticated org.

Data Access Controls in Datadog is a feature that allows administrators and access managers to regulate
access to sensitive data. By defining Restricted Datasets, you can ensure that only specific teams or roles can
view certain types of telemetry (for example, logs, traces, metrics, and RUM data).

Configure your Datadog Email Domain Allowlist directly through the Datadog API.
The Email Domain Allowlist controls the domains that certain datadog emails can be sent to.
For more information, see the [Domain Allowlist docs page](https://docs.datadoghq.com/account_management/org_settings/domain_allowlist)

Manage identity providers and user authentication method overrides.

The IP allowlist API is used to manage the IP addresses that
can access the Datadog API and web UI. It does not block
access to intake APIs or public dashboards.

This is an enterprise-only feature. Request access by
contacting Datadog support, or see the [IP Allowlist page](https://docs.datadoghq.com/account_management/org_settings/ip_allowlist/) for more information.

Manage your Datadog API and application keys. You need an API key and an
application key for a user with the required permissions to interact with these endpoints.

Consult the following pages to view and manage your keys:

- [API Keys](https://app.datadoghq.com/organization-settings/api-keys)
- [Application Keys](https://app.datadoghq.com/personal-settings/application-keys)

Configure OAuth2 clients for Datadog.
Supports RFC 7591 Dynamic Client Registration and management of OAuth2 client scopes restrictions.

Manage OAuth2 client authorizations at the organization level.

Create, edit, and manage your organizations. Read more about [multi-org accounts](https://docs.datadoghq.com/account_management/multi_organization).

A restriction policy defines the access control rules for a resource, mapping a set of relations
(such as editor and viewer) to a set of allowed principals (such as roles, teams, or users).
The restriction policy determines who is authorized to perform what actions on the resource.

The Roles API is used to create and manage Datadog roles, what
[global permissions](https://docs.datadoghq.com/account_management/rbac/)
they grant, and which users belong to them.

Permissions related to specific account assets can be granted to roles
in the Datadog application without using this API. For example, granting
read access on a specific log index to a role can be done in Datadog from the
[Pipelines page](https://app.datadoghq.com/logs/pipelines).

Roles can also be managed in bulk through the Datadog UI, which provides
the capability to assign a single permission to multiple roles simultaneously.

Create, edit, and disable service accounts. See the [Service Accounts page](https://docs.datadoghq.com/account_management/org_settings/service_accounts/) for more information.

Manage OAuth2 client authorizations at the user level.

Create, edit, and disable users.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-account-management
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-account-management
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-account-management";

const configuration = createConfiguration();
const apiInstance = new v2.AuthNMappingsApi(configuration);
const params = {/* parameters */};

apiInstance.listAuthNMappings(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```