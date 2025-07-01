import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  applySecurityAuthentication,
} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
} from "../../datadog-api-client-common/http/http";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { AwsCURConfigPatchRequest } from "../models/AwsCURConfigPatchRequest";
import { AwsCURConfigPostRequest } from "../models/AwsCURConfigPostRequest";
import { AwsCURConfigResponse } from "../models/AwsCURConfigResponse";
import { AwsCURConfigsResponse } from "../models/AwsCURConfigsResponse";
import { AzureUCConfigPairsResponse } from "../models/AzureUCConfigPairsResponse";
import { AzureUCConfigPatchRequest } from "../models/AzureUCConfigPatchRequest";
import { AzureUCConfigPostRequest } from "../models/AzureUCConfigPostRequest";
import { AzureUCConfigsResponse } from "../models/AzureUCConfigsResponse";
import { BudgetArray } from "../models/BudgetArray";
import { BudgetWithEntries } from "../models/BudgetWithEntries";
import { CustomCostsFileGetResponse } from "../models/CustomCostsFileGetResponse";
import { CustomCostsFileLineItem } from "../models/CustomCostsFileLineItem";
import { CustomCostsFileListResponse } from "../models/CustomCostsFileListResponse";
import { CustomCostsFileUploadResponse } from "../models/CustomCostsFileUploadResponse";
import { GCPUsageCostConfigPatchRequest } from "../models/GCPUsageCostConfigPatchRequest";
import { GCPUsageCostConfigPostRequest } from "../models/GCPUsageCostConfigPostRequest";
import { GCPUsageCostConfigResponse } from "../models/GCPUsageCostConfigResponse";
import { GCPUsageCostConfigsResponse } from "../models/GCPUsageCostConfigsResponse";

export class CloudCostManagementApiRequestFactory extends BaseAPIRequestFactory {
  public async createCostAWSCURConfig(
    body: AwsCURConfigPostRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCostAWSCURConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/aws_cur_config";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.createCostAWSCURConfig")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AwsCURConfigPostRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createCostAzureUCConfigs(
    body: AzureUCConfigPostRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCostAzureUCConfigs");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/azure_uc_config";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.createCostAzureUCConfigs")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AzureUCConfigPostRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createCostGCPUsageCostConfig(
    body: GCPUsageCostConfigPostRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCostGCPUsageCostConfig");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/gcp_uc_config";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.createCostGCPUsageCostConfig")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "GCPUsageCostConfigPostRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteBudget(
    budgetId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'budgetId' is not null or undefined
    if (budgetId === null || budgetId === undefined) {
      throw new RequiredError("budgetId", "deleteBudget");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/budget/{budget_id}".replace(
      "{budget_id}",
      encodeURIComponent(String(budgetId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.deleteBudget")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteCostAWSCURConfig(
    cloudAccountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'cloudAccountId' is not null or undefined
    if (cloudAccountId === null || cloudAccountId === undefined) {
      throw new RequiredError("cloudAccountId", "deleteCostAWSCURConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/aws_cur_config/{cloud_account_id}".replace(
        "{cloud_account_id}",
        encodeURIComponent(String(cloudAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.deleteCostAWSCURConfig")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteCostAzureUCConfig(
    cloudAccountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'cloudAccountId' is not null or undefined
    if (cloudAccountId === null || cloudAccountId === undefined) {
      throw new RequiredError("cloudAccountId", "deleteCostAzureUCConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/azure_uc_config/{cloud_account_id}".replace(
        "{cloud_account_id}",
        encodeURIComponent(String(cloudAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.deleteCostAzureUCConfig")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteCostGCPUsageCostConfig(
    cloudAccountId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'cloudAccountId' is not null or undefined
    if (cloudAccountId === null || cloudAccountId === undefined) {
      throw new RequiredError("cloudAccountId", "deleteCostGCPUsageCostConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/gcp_uc_config/{cloud_account_id}".replace(
        "{cloud_account_id}",
        encodeURIComponent(String(cloudAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.deleteCostGCPUsageCostConfig")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteCustomCostsFile(
    fileId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'fileId' is not null or undefined
    if (fileId === null || fileId === undefined) {
      throw new RequiredError("fileId", "deleteCustomCostsFile");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/custom_costs/{file_id}".replace(
      "{file_id}",
      encodeURIComponent(String(fileId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.deleteCustomCostsFile")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getBudget(
    budgetId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'budgetId' is not null or undefined
    if (budgetId === null || budgetId === undefined) {
      throw new RequiredError("budgetId", "getBudget");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/budget/{budget_id}".replace(
      "{budget_id}",
      encodeURIComponent(String(budgetId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getBudget")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getCustomCostsFile(
    fileId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'fileId' is not null or undefined
    if (fileId === null || fileId === undefined) {
      throw new RequiredError("fileId", "getCustomCostsFile");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/custom_costs/{file_id}".replace(
      "{file_id}",
      encodeURIComponent(String(fileId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.getCustomCostsFile")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listBudgets(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/budgets";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listBudgets")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listCostAWSCURConfigs(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/aws_cur_config";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCostAWSCURConfigs")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listCostAzureUCConfigs(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/azure_uc_config";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCostAzureUCConfigs")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listCostGCPUsageCostConfigs(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/gcp_uc_config";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCostGCPUsageCostConfigs")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listCustomCostsFiles(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cost/custom_costs";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.listCustomCostsFiles")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateCostAWSCURConfig(
    cloudAccountId: string,
    body: AwsCURConfigPatchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'cloudAccountId' is not null or undefined
    if (cloudAccountId === null || cloudAccountId === undefined) {
      throw new RequiredError("cloudAccountId", "updateCostAWSCURConfig");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCostAWSCURConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/aws_cur_config/{cloud_account_id}".replace(
        "{cloud_account_id}",
        encodeURIComponent(String(cloudAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.updateCostAWSCURConfig")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AwsCURConfigPatchRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateCostAzureUCConfigs(
    cloudAccountId: string,
    body: AzureUCConfigPatchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'cloudAccountId' is not null or undefined
    if (cloudAccountId === null || cloudAccountId === undefined) {
      throw new RequiredError("cloudAccountId", "updateCostAzureUCConfigs");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCostAzureUCConfigs");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/azure_uc_config/{cloud_account_id}".replace(
        "{cloud_account_id}",
        encodeURIComponent(String(cloudAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.updateCostAzureUCConfigs")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AzureUCConfigPatchRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateCostGCPUsageCostConfig(
    cloudAccountId: string,
    body: GCPUsageCostConfigPatchRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'cloudAccountId' is not null or undefined
    if (cloudAccountId === null || cloudAccountId === undefined) {
      throw new RequiredError("cloudAccountId", "updateCostGCPUsageCostConfig");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateCostGCPUsageCostConfig");
    }

    // Path Params
    const localVarPath =
      "/api/v2/cost/gcp_uc_config/{cloud_account_id}".replace(
        "{cloud_account_id}",
        encodeURIComponent(String(cloudAccountId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.updateCostGCPUsageCostConfig")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "GCPUsageCostConfigPatchRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async uploadCustomCostsFile(
    body: Array<CustomCostsFileLineItem>,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "uploadCustomCostsFile");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/custom_costs";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.uploadCustomCostsFile")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "Array<CustomCostsFileLineItem>", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async upsertBudget(
    body: BudgetWithEntries,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "upsertBudget");
    }

    // Path Params
    const localVarPath = "/api/v2/cost/budget";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudCostManagementApi.upsertBudget")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "BudgetWithEntries", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class CloudCostManagementApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createCostAWSCURConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCostAWSCURConfig(
    response: ResponseContext
  ): Promise<AwsCURConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AwsCURConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsCURConfigResponse"
      ) as AwsCURConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AwsCURConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsCURConfigResponse",
        ""
      ) as AwsCURConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createCostAzureUCConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCostAzureUCConfigs(
    response: ResponseContext
  ): Promise<AzureUCConfigPairsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AzureUCConfigPairsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AzureUCConfigPairsResponse"
      ) as AzureUCConfigPairsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AzureUCConfigPairsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AzureUCConfigPairsResponse",
        ""
      ) as AzureUCConfigPairsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createCostGCPUsageCostConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCostGCPUsageCostConfig(
    response: ResponseContext
  ): Promise<GCPUsageCostConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GCPUsageCostConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GCPUsageCostConfigResponse"
      ) as GCPUsageCostConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GCPUsageCostConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GCPUsageCostConfigResponse",
        ""
      ) as GCPUsageCostConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteBudget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteBudget(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteCostAWSCURConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCostAWSCURConfig(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteCostAzureUCConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCostAzureUCConfig(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteCostGCPUsageCostConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCostGCPUsageCostConfig(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteCustomCostsFile
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCustomCostsFile(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getBudget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getBudget(
    response: ResponseContext
  ): Promise<BudgetWithEntries> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: BudgetWithEntries = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BudgetWithEntries"
      ) as BudgetWithEntries;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: BudgetWithEntries = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BudgetWithEntries",
        ""
      ) as BudgetWithEntries;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getCustomCostsFile
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getCustomCostsFile(
    response: ResponseContext
  ): Promise<CustomCostsFileGetResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CustomCostsFileGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CustomCostsFileGetResponse"
      ) as CustomCostsFileGetResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CustomCostsFileGetResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CustomCostsFileGetResponse",
        ""
      ) as CustomCostsFileGetResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listBudgets
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listBudgets(response: ResponseContext): Promise<BudgetArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: BudgetArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BudgetArray"
      ) as BudgetArray;
      return body;
    }
    if (response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: BudgetArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BudgetArray",
        ""
      ) as BudgetArray;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listCostAWSCURConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostAWSCURConfigs(
    response: ResponseContext
  ): Promise<AwsCURConfigsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AwsCURConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsCURConfigsResponse"
      ) as AwsCURConfigsResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AwsCURConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsCURConfigsResponse",
        ""
      ) as AwsCURConfigsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listCostAzureUCConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostAzureUCConfigs(
    response: ResponseContext
  ): Promise<AzureUCConfigsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AzureUCConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AzureUCConfigsResponse"
      ) as AzureUCConfigsResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AzureUCConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AzureUCConfigsResponse",
        ""
      ) as AzureUCConfigsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listCostGCPUsageCostConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCostGCPUsageCostConfigs(
    response: ResponseContext
  ): Promise<GCPUsageCostConfigsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GCPUsageCostConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GCPUsageCostConfigsResponse"
      ) as GCPUsageCostConfigsResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GCPUsageCostConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GCPUsageCostConfigsResponse",
        ""
      ) as GCPUsageCostConfigsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listCustomCostsFiles
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCustomCostsFiles(
    response: ResponseContext
  ): Promise<CustomCostsFileListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: CustomCostsFileListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CustomCostsFileListResponse"
      ) as CustomCostsFileListResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CustomCostsFileListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CustomCostsFileListResponse",
        ""
      ) as CustomCostsFileListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateCostAWSCURConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCostAWSCURConfig(
    response: ResponseContext
  ): Promise<AwsCURConfigsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AwsCURConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsCURConfigsResponse"
      ) as AwsCURConfigsResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AwsCURConfigsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsCURConfigsResponse",
        ""
      ) as AwsCURConfigsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateCostAzureUCConfigs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCostAzureUCConfigs(
    response: ResponseContext
  ): Promise<AzureUCConfigPairsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AzureUCConfigPairsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AzureUCConfigPairsResponse"
      ) as AzureUCConfigPairsResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AzureUCConfigPairsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AzureUCConfigPairsResponse",
        ""
      ) as AzureUCConfigPairsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateCostGCPUsageCostConfig
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateCostGCPUsageCostConfig(
    response: ResponseContext
  ): Promise<GCPUsageCostConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GCPUsageCostConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GCPUsageCostConfigResponse"
      ) as GCPUsageCostConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GCPUsageCostConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GCPUsageCostConfigResponse",
        ""
      ) as GCPUsageCostConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to uploadCustomCostsFile
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async uploadCustomCostsFile(
    response: ResponseContext
  ): Promise<CustomCostsFileUploadResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 202) {
      const body: CustomCostsFileUploadResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CustomCostsFileUploadResponse"
      ) as CustomCostsFileUploadResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CustomCostsFileUploadResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CustomCostsFileUploadResponse",
        ""
      ) as CustomCostsFileUploadResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to upsertBudget
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async upsertBudget(
    response: ResponseContext
  ): Promise<BudgetWithEntries> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: BudgetWithEntries = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BudgetWithEntries"
      ) as BudgetWithEntries;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 404 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: BudgetWithEntries = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BudgetWithEntries",
        ""
      ) as BudgetWithEntries;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface CloudCostManagementApiCreateCostAWSCURConfigRequest {
  /**
   * @type AwsCURConfigPostRequest
   */
  body: AwsCURConfigPostRequest;
}

export interface CloudCostManagementApiCreateCostAzureUCConfigsRequest {
  /**
   * @type AzureUCConfigPostRequest
   */
  body: AzureUCConfigPostRequest;
}

export interface CloudCostManagementApiCreateCostGCPUsageCostConfigRequest {
  /**
   * @type GCPUsageCostConfigPostRequest
   */
  body: GCPUsageCostConfigPostRequest;
}

export interface CloudCostManagementApiDeleteBudgetRequest {
  /**
   * Budget id.
   * @type string
   */
  budgetId: string;
}

export interface CloudCostManagementApiDeleteCostAWSCURConfigRequest {
  /**
   * Cloud Account id.
   * @type string
   */
  cloudAccountId: string;
}

export interface CloudCostManagementApiDeleteCostAzureUCConfigRequest {
  /**
   * Cloud Account id.
   * @type string
   */
  cloudAccountId: string;
}

export interface CloudCostManagementApiDeleteCostGCPUsageCostConfigRequest {
  /**
   * Cloud Account id.
   * @type string
   */
  cloudAccountId: string;
}

export interface CloudCostManagementApiDeleteCustomCostsFileRequest {
  /**
   * File ID.
   * @type string
   */
  fileId: string;
}

export interface CloudCostManagementApiGetBudgetRequest {
  /**
   * Budget id.
   * @type string
   */
  budgetId: string;
}

export interface CloudCostManagementApiGetCustomCostsFileRequest {
  /**
   * File ID.
   * @type string
   */
  fileId: string;
}

export interface CloudCostManagementApiUpdateCostAWSCURConfigRequest {
  /**
   * Cloud Account id.
   * @type string
   */
  cloudAccountId: string;
  /**
   * @type AwsCURConfigPatchRequest
   */
  body: AwsCURConfigPatchRequest;
}

export interface CloudCostManagementApiUpdateCostAzureUCConfigsRequest {
  /**
   * Cloud Account id.
   * @type string
   */
  cloudAccountId: string;
  /**
   * @type AzureUCConfigPatchRequest
   */
  body: AzureUCConfigPatchRequest;
}

export interface CloudCostManagementApiUpdateCostGCPUsageCostConfigRequest {
  /**
   * Cloud Account id.
   * @type string
   */
  cloudAccountId: string;
  /**
   * @type GCPUsageCostConfigPatchRequest
   */
  body: GCPUsageCostConfigPatchRequest;
}

export interface CloudCostManagementApiUploadCustomCostsFileRequest {
  /**
   * @type Array<CustomCostsFileLineItem>
   */
  body: Array<CustomCostsFileLineItem>;
}

export interface CloudCostManagementApiUpsertBudgetRequest {
  /**
   * @type BudgetWithEntries
   */
  body: BudgetWithEntries;
}

export class CloudCostManagementApi {
  private requestFactory: CloudCostManagementApiRequestFactory;
  private responseProcessor: CloudCostManagementApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: CloudCostManagementApiRequestFactory,
    responseProcessor?: CloudCostManagementApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new CloudCostManagementApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new CloudCostManagementApiResponseProcessor();
  }

  /**
   * Create a Cloud Cost Management account for an AWS CUR config.
   * @param param The request object
   */
  public createCostAWSCURConfig(
    param: CloudCostManagementApiCreateCostAWSCURConfigRequest,
    options?: Configuration
  ): Promise<AwsCURConfigResponse> {
    const requestContextPromise = this.requestFactory.createCostAWSCURConfig(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCostAWSCURConfig(responseContext);
        });
    });
  }

  /**
   * Create a Cloud Cost Management account for an Azure config.
   * @param param The request object
   */
  public createCostAzureUCConfigs(
    param: CloudCostManagementApiCreateCostAzureUCConfigsRequest,
    options?: Configuration
  ): Promise<AzureUCConfigPairsResponse> {
    const requestContextPromise = this.requestFactory.createCostAzureUCConfigs(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCostAzureUCConfigs(
            responseContext
          );
        });
    });
  }

  /**
   * Create a Cloud Cost Management account for an GCP Usage Cost config.
   * @param param The request object
   */
  public createCostGCPUsageCostConfig(
    param: CloudCostManagementApiCreateCostGCPUsageCostConfigRequest,
    options?: Configuration
  ): Promise<GCPUsageCostConfigResponse> {
    const requestContextPromise =
      this.requestFactory.createCostGCPUsageCostConfig(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCostGCPUsageCostConfig(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a budget.
   * @param param The request object
   */
  public deleteBudget(
    param: CloudCostManagementApiDeleteBudgetRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteBudget(
      param.budgetId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteBudget(responseContext);
        });
    });
  }

  /**
   * Archive a Cloud Cost Management Account.
   * @param param The request object
   */
  public deleteCostAWSCURConfig(
    param: CloudCostManagementApiDeleteCostAWSCURConfigRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCostAWSCURConfig(
      param.cloudAccountId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCostAWSCURConfig(responseContext);
        });
    });
  }

  /**
   * Archive a Cloud Cost Management Account.
   * @param param The request object
   */
  public deleteCostAzureUCConfig(
    param: CloudCostManagementApiDeleteCostAzureUCConfigRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCostAzureUCConfig(
      param.cloudAccountId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCostAzureUCConfig(
            responseContext
          );
        });
    });
  }

  /**
   * Archive a Cloud Cost Management account.
   * @param param The request object
   */
  public deleteCostGCPUsageCostConfig(
    param: CloudCostManagementApiDeleteCostGCPUsageCostConfigRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteCostGCPUsageCostConfig(
        param.cloudAccountId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCostGCPUsageCostConfig(
            responseContext
          );
        });
    });
  }

  /**
   * Delete the specified Custom Costs file.
   * @param param The request object
   */
  public deleteCustomCostsFile(
    param: CloudCostManagementApiDeleteCustomCostsFileRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCustomCostsFile(
      param.fileId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCustomCostsFile(responseContext);
        });
    });
  }

  /**
   * Get a budget.
   * @param param The request object
   */
  public getBudget(
    param: CloudCostManagementApiGetBudgetRequest,
    options?: Configuration
  ): Promise<BudgetWithEntries> {
    const requestContextPromise = this.requestFactory.getBudget(
      param.budgetId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getBudget(responseContext);
        });
    });
  }

  /**
   * Fetch the specified Custom Costs file.
   * @param param The request object
   */
  public getCustomCostsFile(
    param: CloudCostManagementApiGetCustomCostsFileRequest,
    options?: Configuration
  ): Promise<CustomCostsFileGetResponse> {
    const requestContextPromise = this.requestFactory.getCustomCostsFile(
      param.fileId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getCustomCostsFile(responseContext);
        });
    });
  }

  /**
   * List budgets.
   * @param param The request object
   */
  public listBudgets(options?: Configuration): Promise<BudgetArray> {
    const requestContextPromise = this.requestFactory.listBudgets(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listBudgets(responseContext);
        });
    });
  }

  /**
   * List the AWS CUR configs.
   * @param param The request object
   */
  public listCostAWSCURConfigs(
    options?: Configuration
  ): Promise<AwsCURConfigsResponse> {
    const requestContextPromise =
      this.requestFactory.listCostAWSCURConfigs(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostAWSCURConfigs(responseContext);
        });
    });
  }

  /**
   * List the Azure configs.
   * @param param The request object
   */
  public listCostAzureUCConfigs(
    options?: Configuration
  ): Promise<AzureUCConfigsResponse> {
    const requestContextPromise =
      this.requestFactory.listCostAzureUCConfigs(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostAzureUCConfigs(responseContext);
        });
    });
  }

  /**
   * List the GCP Usage Cost configs.
   * @param param The request object
   */
  public listCostGCPUsageCostConfigs(
    options?: Configuration
  ): Promise<GCPUsageCostConfigsResponse> {
    const requestContextPromise =
      this.requestFactory.listCostGCPUsageCostConfigs(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCostGCPUsageCostConfigs(
            responseContext
          );
        });
    });
  }

  /**
   * List the Custom Costs files.
   * @param param The request object
   */
  public listCustomCostsFiles(
    options?: Configuration
  ): Promise<CustomCostsFileListResponse> {
    const requestContextPromise =
      this.requestFactory.listCustomCostsFiles(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listCustomCostsFiles(responseContext);
        });
    });
  }

  /**
   * Update the status (active/archived) and/or account filtering configuration of an AWS CUR config.
   * @param param The request object
   */
  public updateCostAWSCURConfig(
    param: CloudCostManagementApiUpdateCostAWSCURConfigRequest,
    options?: Configuration
  ): Promise<AwsCURConfigsResponse> {
    const requestContextPromise = this.requestFactory.updateCostAWSCURConfig(
      param.cloudAccountId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCostAWSCURConfig(responseContext);
        });
    });
  }

  /**
   * Update the status of an  Azure config (active/archived).
   * @param param The request object
   */
  public updateCostAzureUCConfigs(
    param: CloudCostManagementApiUpdateCostAzureUCConfigsRequest,
    options?: Configuration
  ): Promise<AzureUCConfigPairsResponse> {
    const requestContextPromise = this.requestFactory.updateCostAzureUCConfigs(
      param.cloudAccountId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCostAzureUCConfigs(
            responseContext
          );
        });
    });
  }

  /**
   * Update the status of an GCP Usage Cost config (active/archived).
   * @param param The request object
   */
  public updateCostGCPUsageCostConfig(
    param: CloudCostManagementApiUpdateCostGCPUsageCostConfigRequest,
    options?: Configuration
  ): Promise<GCPUsageCostConfigResponse> {
    const requestContextPromise =
      this.requestFactory.updateCostGCPUsageCostConfig(
        param.cloudAccountId,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateCostGCPUsageCostConfig(
            responseContext
          );
        });
    });
  }

  /**
   * Upload a Custom Costs file.
   * @param param The request object
   */
  public uploadCustomCostsFile(
    param: CloudCostManagementApiUploadCustomCostsFileRequest,
    options?: Configuration
  ): Promise<CustomCostsFileUploadResponse> {
    const requestContextPromise = this.requestFactory.uploadCustomCostsFile(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.uploadCustomCostsFile(responseContext);
        });
    });
  }

  /**
   * Create a new budget or update an existing one.
   * @param param The request object
   */
  public upsertBudget(
    param: CloudCostManagementApiUpsertBudgetRequest,
    options?: Configuration
  ): Promise<BudgetWithEntries> {
    const requestContextPromise = this.requestFactory.upsertBudget(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.upsertBudget(responseContext);
        });
    });
  }
}
