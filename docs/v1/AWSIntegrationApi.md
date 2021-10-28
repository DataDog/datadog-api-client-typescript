# datadog-api-client.v1.AWSIntegrationApi

All URIs are relative to *https://api.datadoghq.com*

| Method                                                                            | HTTP request                                              | Description                  |
| --------------------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------- |
| [**createAWSAccount**](AWSIntegrationApi.md#createAWSAccount)                     | **POST** /api/v1/integration/aws                          | Create an AWS integration    |
| [**createAWSTagFilter**](AWSIntegrationApi.md#createAWSTagFilter)                 | **POST** /api/v1/integration/aws/filtering                | Set an AWS tag filter        |
| [**createNewAWSExternalID**](AWSIntegrationApi.md#createNewAWSExternalID)         | **PUT** /api/v1/integration/aws/generate_new_external_id  | Generate a new external ID   |
| [**deleteAWSAccount**](AWSIntegrationApi.md#deleteAWSAccount)                     | **DELETE** /api/v1/integration/aws                        | Delete an AWS integration    |
| [**deleteAWSTagFilter**](AWSIntegrationApi.md#deleteAWSTagFilter)                 | **DELETE** /api/v1/integration/aws/filtering              | Delete a tag filtering entry |
| [**listAWSAccounts**](AWSIntegrationApi.md#listAWSAccounts)                       | **GET** /api/v1/integration/aws                           | List all AWS integrations    |
| [**listAWSTagFilters**](AWSIntegrationApi.md#listAWSTagFilters)                   | **GET** /api/v1/integration/aws/filtering                 | Get all AWS tag filters      |
| [**listAvailableAWSNamespaces**](AWSIntegrationApi.md#listAvailableAWSNamespaces) | **GET** /api/v1/integration/aws/available_namespace_rules | List namespace rules         |
| [**updateAWSAccount**](AWSIntegrationApi.md#updateAWSAccount)                     | **PUT** /api/v1/integration/aws                           | Update an AWS integration    |

## **createAWSAccount**

> AWSAccountCreateResponse createAWSAccount(body)

Create a Datadog-Amazon Web Services integration.
Using the `POST` method updates your integration configuration
by adding your new configuration to the existing one in your Datadog organization.
A unique AWS Account ID for role based authentication.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

let params: v1.AWSIntegrationApiCreateAWSAccountRequest = {
  // AWSAccount | AWS Request Object
  body: {
    accessKeyId: "accessKeyId_example",
    accountId: "1234567",
    accountSpecificNamespaceRules: {
      key: true,
    },
    cspmResourceCollectionEnabled: true,
    excludedRegions: ["us-east-1", "us-west-2"],
    filterTags: ["<KEY>:<VALUE>"],
    hostTags: ["<KEY>:<VALUE>"],
    metricsCollectionEnabled: false,
    resourceCollectionEnabled: true,
    roleName: "DatadogAWSIntegrationRole",
    secretAccessKey: "secretAccessKey_example",
  },
};

apiInstance
  .createAWSAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type           | Description        | Notes |
| -------- | -------------- | ------------------ | ----- |
| **body** | **AWSAccount** | AWS Request Object |

### Return type

**AWSAccountCreateResponse**

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
| **403**     | Authentication Error | -                |
| **409**     | Conflict Error       | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **createAWSTagFilter**

> any createAWSTagFilter(body)

Set an AWS tag filter.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

let params: v1.AWSIntegrationApiCreateAWSTagFilterRequest = {
  // AWSTagFilterCreateRequest | Set an AWS tag filter using an `aws_account_identifier`, `namespace`, and filtering string. Namespace options are `application_elb`, `elb`, `lambda`, `network_elb`, `rds`, `sqs`, and `custom`.
  body: {
    accountId: "1234567",
    namespace: "elb",
    tagFilterStr: "prod*",
  },
};

apiInstance
  .createAWSTagFilter(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type                          | Description                                                                                                                                                                                                                                                                                | Notes |
| -------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- |
| **body** | **AWSTagFilterCreateRequest** | Set an AWS tag filter using an &#x60;aws_account_identifier&#x60;, &#x60;namespace&#x60;, and filtering string. Namespace options are &#x60;application_elb&#x60;, &#x60;elb&#x60;, &#x60;lambda&#x60;, &#x60;network_elb&#x60;, &#x60;rds&#x60;, &#x60;sqs&#x60;, and &#x60;custom&#x60;. |

### Return type

**any**

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
| **403**     | Authentication Error | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **createNewAWSExternalID**

> AWSAccountCreateResponse createNewAWSExternalID(body)

Generate a new AWS external ID for a given AWS account ID and role name pair.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

let params: v1.AWSIntegrationApiCreateNewAWSExternalIDRequest = {
  // AWSAccount | Your Datadog role delegation name. For more information about your AWS account Role name, see the [Datadog AWS integration configuration info](https://docs.datadoghq.com/integrations/amazon_web_services/#setup).
  body: {
    accessKeyId: "accessKeyId_example",
    accountId: "1234567",
    accountSpecificNamespaceRules: {
      key: true,
    },
    cspmResourceCollectionEnabled: true,
    excludedRegions: ["us-east-1", "us-west-2"],
    filterTags: ["<KEY>:<VALUE>"],
    hostTags: ["<KEY>:<VALUE>"],
    metricsCollectionEnabled: false,
    resourceCollectionEnabled: true,
    roleName: "DatadogAWSIntegrationRole",
    secretAccessKey: "secretAccessKey_example",
  },
};

apiInstance
  .createNewAWSExternalID(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type           | Description                                                                                                                                                                                                         | Notes |
| -------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **body** | **AWSAccount** | Your Datadog role delegation name. For more information about your AWS account Role name, see the [Datadog AWS integration configuration info](https://docs.datadoghq.com/integrations/amazon_web_services/#setup). |

### Return type

**AWSAccountCreateResponse**

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
| **403**     | Authentication Error | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteAWSAccount**

> any deleteAWSAccount(body)

Delete a Datadog-AWS integration matching the specified `account_id` and `role_name parameters`.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

let params: v1.AWSIntegrationApiDeleteAWSAccountRequest = {
  // AWSAccountDeleteRequest | AWS request object
  body: {
    accessKeyId: "accessKeyId_example",
    accountId: "1234567",
    roleName: "DatadogAWSIntegrationRole",
  },
};

apiInstance
  .deleteAWSAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type                        | Description        | Notes |
| -------- | --------------------------- | ------------------ | ----- |
| **body** | **AWSAccountDeleteRequest** | AWS request object |

### Return type

**any**

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
| **403**     | Authentication Error | -                |
| **409**     | Conflict Error       | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteAWSTagFilter**

> any deleteAWSTagFilter(body)

Delete a tag filtering entry.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

let params: v1.AWSIntegrationApiDeleteAWSTagFilterRequest = {
  // AWSTagFilterDeleteRequest | Delete a tag filtering entry for a given AWS account and `dd-aws` namespace.
  body: {
    accountId: "FAKEAC0FAKEAC2FAKEAC",
    namespace: "elb",
  },
};

apiInstance
  .deleteAWSTagFilter(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type                          | Description                                                                            | Notes |
| -------- | ----------------------------- | -------------------------------------------------------------------------------------- | ----- |
| **body** | **AWSTagFilterDeleteRequest** | Delete a tag filtering entry for a given AWS account and &#x60;dd-aws&#x60; namespace. |

### Return type

**any**

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
| **403**     | Authentication Error | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listAWSAccounts**

> AWSAccountListResponse listAWSAccounts()

List all Datadog-AWS integrations available in your Datadog organization.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

let params: v1.AWSIntegrationApiListAWSAccountsRequest = {
  // string | Only return AWS accounts that matches this `account_id`. (optional)
  accountId: "account_id_example",
  // string | Only return AWS accounts that matches this role_name. (optional)
  roleName: "role_name_example",
  // string | Only return AWS accounts that matches this `access_key_id`. (optional)
  accessKeyId: "access_key_id_example",
};

apiInstance
  .listAWSAccounts(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type         | Description                                                           | Notes                            |
| --------------- | ------------ | --------------------------------------------------------------------- | -------------------------------- |
| **accountId**   | [**string**] | Only return AWS accounts that matches this &#x60;account_id&#x60;.    | (optional) defaults to undefined |
| **roleName**    | [**string**] | Only return AWS accounts that matches this role_name.                 | (optional) defaults to undefined |
| **accessKeyId** | [**string**] | Only return AWS accounts that matches this &#x60;access_key_id&#x60;. | (optional) defaults to undefined |

### Return type

**AWSAccountListResponse**

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
| **403**     | Authentication Error | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listAWSTagFilters**

> AWSTagFilterListResponse listAWSTagFilters()

Get all AWS tag filters.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

let params: v1.AWSIntegrationApiListAWSTagFiltersRequest = {
  // string | Only return AWS filters that matches this `account_id`.
  accountId: "account_id_example",
};

apiInstance
  .listAWSTagFilters(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name          | Type         | Description                                                       | Notes                 |
| ------------- | ------------ | ----------------------------------------------------------------- | --------------------- |
| **accountId** | [**string**] | Only return AWS filters that matches this &#x60;account_id&#x60;. | defaults to undefined |

### Return type

**AWSTagFilterListResponse**

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
| **403**     | Authentication Error | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listAvailableAWSNamespaces**

> Array<string> listAvailableAWSNamespaces()

List all namespace rules for a given Datadog-AWS integration. This endpoint takes no arguments.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

apiInstance
  .listAvailableAWSNamespaces()
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Array<string>**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **403**     | Authentication Error | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateAWSAccount**

> any updateAWSAccount(body)

Update a Datadog-Amazon Web Services integration.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

let params: v1.AWSIntegrationApiUpdateAWSAccountRequest = {
  // AWSAccount | AWS request object
  body: {
    accessKeyId: "accessKeyId_example",
    accountId: "1234567",
    accountSpecificNamespaceRules: {
      key: true,
    },
    cspmResourceCollectionEnabled: true,
    excludedRegions: ["us-east-1", "us-west-2"],
    filterTags: ["<KEY>:<VALUE>"],
    hostTags: ["<KEY>:<VALUE>"],
    metricsCollectionEnabled: false,
    resourceCollectionEnabled: true,
    roleName: "DatadogAWSIntegrationRole",
    secretAccessKey: "secretAccessKey_example",
  },
  // string | Only return AWS accounts that matches this `account_id`. (optional)
  accountId: "account_id_example",
  // string | Only return AWS accounts that match this `role_name`. Required if `account_id` is specified. (optional)
  roleName: "role_name_example",
  // string | Only return AWS accounts that matches this `access_key_id`. Required if none of the other two options are specified. (optional)
  accessKeyId: "access_key_id_example",
};

apiInstance
  .updateAWSAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type           | Description                                                                                                                    | Notes                            |
| --------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| **body**        | **AWSAccount** | AWS request object                                                                                                             |
| **accountId**   | [**string**]   | Only return AWS accounts that matches this &#x60;account_id&#x60;.                                                             | (optional) defaults to undefined |
| **roleName**    | [**string**]   | Only return AWS accounts that match this &#x60;role_name&#x60;. Required if &#x60;account_id&#x60; is specified.               | (optional) defaults to undefined |
| **accessKeyId** | [**string**]   | Only return AWS accounts that matches this &#x60;access_key_id&#x60;. Required if none of the other two options are specified. | (optional) defaults to undefined |

### Return type

**any**

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
| **403**     | Authentication Error | -                |
| **409**     | Conflict Error       | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
