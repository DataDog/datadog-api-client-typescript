# datadog-api-client.v1.WebhooksIntegrationApi

All URIs are relative to *https://api.datadoghq.com*

| Method                                                                                                           | HTTP request                                                                                  | Description                   |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------- |
| [**createWebhooksIntegration**](WebhooksIntegrationApi.md#createWebhooksIntegration)                             | **POST** /api/v1/integration/webhooks/configuration/webhooks                                  | Create a webhooks integration |
| [**createWebhooksIntegrationCustomVariable**](WebhooksIntegrationApi.md#createWebhooksIntegrationCustomVariable) | **POST** /api/v1/integration/webhooks/configuration/custom-variables                          | Create a custom variable      |
| [**deleteWebhooksIntegration**](WebhooksIntegrationApi.md#deleteWebhooksIntegration)                             | **DELETE** /api/v1/integration/webhooks/configuration/webhooks/{webhook_name}                 | Delete a webhook              |
| [**deleteWebhooksIntegrationCustomVariable**](WebhooksIntegrationApi.md#deleteWebhooksIntegrationCustomVariable) | **DELETE** /api/v1/integration/webhooks/configuration/custom-variables/{custom_variable_name} | Delete a custom variable      |
| [**getWebhooksIntegration**](WebhooksIntegrationApi.md#getWebhooksIntegration)                                   | **GET** /api/v1/integration/webhooks/configuration/webhooks/{webhook_name}                    | Get a webhook integration     |
| [**getWebhooksIntegrationCustomVariable**](WebhooksIntegrationApi.md#getWebhooksIntegrationCustomVariable)       | **GET** /api/v1/integration/webhooks/configuration/custom-variables/{custom_variable_name}    | Get a custom variable         |
| [**updateWebhooksIntegration**](WebhooksIntegrationApi.md#updateWebhooksIntegration)                             | **PUT** /api/v1/integration/webhooks/configuration/webhooks/{webhook_name}                    | Update a webhook              |
| [**updateWebhooksIntegrationCustomVariable**](WebhooksIntegrationApi.md#updateWebhooksIntegrationCustomVariable) | **PUT** /api/v1/integration/webhooks/configuration/custom-variables/{custom_variable_name}    | Update a custom variable      |

## **createWebhooksIntegration**

> WebhooksIntegration createWebhooksIntegration(body)

Creates an endpoint with the name `<WEBHOOK_NAME>`.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

let params: v1.WebhooksIntegrationApiCreateWebhooksIntegrationRequest = {
  // WebhooksIntegration | Create a webhooks integration request body.
  body: {
    customHeaders: "customHeaders_example",
    encodeAs: "json",
    name: "WEBHOOK_NAME",
    payload: "payload_example",
    url: "https://example.com/webhook",
  },
};

apiInstance
  .createWebhooksIntegration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type                    | Description                                 | Notes |
| -------- | ----------------------- | ------------------------------------------- | ----- |
| **body** | **WebhooksIntegration** | Create a webhooks integration request body. |

### Return type

**WebhooksIntegration**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **201**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication error | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **createWebhooksIntegrationCustomVariable**

> WebhooksIntegrationCustomVariableResponse createWebhooksIntegrationCustomVariable(body)

Creates an endpoint with the name `<CUSTOM_VARIABLE_NAME>`.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

let params: v1.WebhooksIntegrationApiCreateWebhooksIntegrationCustomVariableRequest =
  {
    // WebhooksIntegrationCustomVariable | Define a custom variable request body.
    body: {
      isSecret: true,
      name: "CUSTOM_VARIABLE_NAME",
      value: "CUSTOM_VARIABLE_VALUE",
    },
  };

apiInstance
  .createWebhooksIntegrationCustomVariable(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type                                  | Description                            | Notes |
| -------- | ------------------------------------- | -------------------------------------- | ----- |
| **body** | **WebhooksIntegrationCustomVariable** | Define a custom variable request body. |

### Return type

**WebhooksIntegrationCustomVariableResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **201**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication error | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteWebhooksIntegration**

> void deleteWebhooksIntegration()

Deletes the endpoint with the name `<WEBHOOK NAME>`.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

let params: v1.WebhooksIntegrationApiDeleteWebhooksIntegrationRequest = {
  // string | The name of the webhook.
  webhookName: "webhook_name_example",
};

apiInstance
  .deleteWebhooksIntegration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type         | Description              | Notes                 |
| --------------- | ------------ | ------------------------ | --------------------- |
| **webhookName** | [**string**] | The name of the webhook. | defaults to undefined |

### Return type

**void**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **403**     | Authentication error | -                |
| **404**     | Item Not Found       | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteWebhooksIntegrationCustomVariable**

> void deleteWebhooksIntegrationCustomVariable()

Deletes the endpoint with the name `<CUSTOM_VARIABLE_NAME>`.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

let params: v1.WebhooksIntegrationApiDeleteWebhooksIntegrationCustomVariableRequest =
  {
    // string | The name of the custom variable.
    customVariableName: "custom_variable_name_example",
  };

apiInstance
  .deleteWebhooksIntegrationCustomVariable(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                   | Type         | Description                      | Notes                 |
| ---------------------- | ------------ | -------------------------------- | --------------------- |
| **customVariableName** | [**string**] | The name of the custom variable. | defaults to undefined |

### Return type

**void**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **403**     | Authentication error | -                |
| **404**     | Item Not Found       | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getWebhooksIntegration**

> WebhooksIntegration getWebhooksIntegration()

Gets the content of the webhook with the name `<WEBHOOK_NAME>`.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

let params: v1.WebhooksIntegrationApiGetWebhooksIntegrationRequest = {
  // string | The name of the webhook.
  webhookName: "webhook_name_example",
};

apiInstance
  .getWebhooksIntegration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type         | Description              | Notes                 |
| --------------- | ------------ | ------------------------ | --------------------- |
| **webhookName** | [**string**] | The name of the webhook. | defaults to undefined |

### Return type

**WebhooksIntegration**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication error | -                |
| **404**     | Item Not Found       | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getWebhooksIntegrationCustomVariable**

> WebhooksIntegrationCustomVariableResponse getWebhooksIntegrationCustomVariable()

Shows the content of the custom variable with the name `<CUSTOM_VARIABLE_NAME>`.

If the custom variable is secret, the value does not return in the
response payload.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

let params: v1.WebhooksIntegrationApiGetWebhooksIntegrationCustomVariableRequest =
  {
    // string | The name of the custom variable.
    customVariableName: "custom_variable_name_example",
  };

apiInstance
  .getWebhooksIntegrationCustomVariable(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                   | Type         | Description                      | Notes                 |
| ---------------------- | ------------ | -------------------------------- | --------------------- |
| **customVariableName** | [**string**] | The name of the custom variable. | defaults to undefined |

### Return type

**WebhooksIntegrationCustomVariableResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication error | -                |
| **404**     | Item Not Found       | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateWebhooksIntegration**

> WebhooksIntegration updateWebhooksIntegration(body)

Updates the endpoint with the name `<WEBHOOK_NAME>`.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

let params: v1.WebhooksIntegrationApiUpdateWebhooksIntegrationRequest = {
  // string | The name of the webhook.
  webhookName: "webhook_name_example",
  // WebhooksIntegrationUpdateRequest | Update an existing Datadog-Webhooks integration.
  body: {
    customHeaders: "customHeaders_example",
    encodeAs: "json",
    name: "WEBHOOK_NAME",
    payload: "payload_example",
    url: "https://example.com/webhook",
  },
};

apiInstance
  .updateWebhooksIntegration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type                                 | Description                                      | Notes                 |
| --------------- | ------------------------------------ | ------------------------------------------------ | --------------------- |
| **body**        | **WebhooksIntegrationUpdateRequest** | Update an existing Datadog-Webhooks integration. |
| **webhookName** | [**string**]                         | The name of the webhook.                         | defaults to undefined |

### Return type

**WebhooksIntegration**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication error | -                |
| **404**     | Item Not Found       | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateWebhooksIntegrationCustomVariable**

> WebhooksIntegrationCustomVariableResponse updateWebhooksIntegrationCustomVariable(body)

Updates the endpoint with the name `<CUSTOM_VARIABLE_NAME>`.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

let params: v1.WebhooksIntegrationApiUpdateWebhooksIntegrationCustomVariableRequest =
  {
    // string | The name of the custom variable.
    customVariableName: "custom_variable_name_example",
    // WebhooksIntegrationCustomVariableUpdateRequest | Update an existing custom variable request body.
    body: {
      isSecret: true,
      name: "CUSTOM_VARIABLE_NAME",
      value: "CUSTOM_VARIABLE_VALUE",
    },
  };

apiInstance
  .updateWebhooksIntegrationCustomVariable(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                   | Type                                               | Description                                      | Notes                 |
| ---------------------- | -------------------------------------------------- | ------------------------------------------------ | --------------------- |
| **body**               | **WebhooksIntegrationCustomVariableUpdateRequest** | Update an existing custom variable request body. |
| **customVariableName** | [**string**]                                       | The name of the custom variable.                 | defaults to undefined |

### Return type

**WebhooksIntegrationCustomVariableResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication error | -                |
| **404**     | Item Not Found       | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
