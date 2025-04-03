import {
  BaseAPIRequestFactory,
  Configuration,
  applySecurityAuthentication,
  RequestContext,
  HttpMethod,
  ResponseContext,
  logger,
  RequiredError,
  ApiException,
  createConfiguration,
} from "@datadog/datadog-api-client";

import { ObjectSerializer } from "./models/ObjectSerializer";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { AWSAccount } from "./models/AWSAccount";
import { AWSAccountCreateResponse } from "./models/AWSAccountCreateResponse";
import { AWSAccountDeleteRequest } from "./models/AWSAccountDeleteRequest";
import { AWSAccountListResponse } from "./models/AWSAccountListResponse";
import { AWSEventBridgeCreateRequest } from "./models/AWSEventBridgeCreateRequest";
import { AWSEventBridgeCreateResponse } from "./models/AWSEventBridgeCreateResponse";
import { AWSEventBridgeDeleteRequest } from "./models/AWSEventBridgeDeleteRequest";
import { AWSEventBridgeDeleteResponse } from "./models/AWSEventBridgeDeleteResponse";
import { AWSEventBridgeListResponse } from "./models/AWSEventBridgeListResponse";
import { AWSTagFilterCreateRequest } from "./models/AWSTagFilterCreateRequest";
import { AWSTagFilterDeleteRequest } from "./models/AWSTagFilterDeleteRequest";
import { AWSTagFilterListResponse } from "./models/AWSTagFilterListResponse";

export class AWSIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createAWSAccount(
    body: AWSAccount,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAWSAccount");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/aws";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AWSIntegrationApi.createAWSAccount")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "AWSAccount", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createAWSEventBridgeSource(
    body: AWSEventBridgeCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAWSEventBridgeSource");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/aws/event_bridge";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AWSIntegrationApi.createAWSEventBridgeSource")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "AWSEventBridgeCreateRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createAWSTagFilter(
    body: AWSTagFilterCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAWSTagFilter");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/aws/filtering";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AWSIntegrationApi.createAWSTagFilter")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "AWSTagFilterCreateRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createNewAWSExternalID(
    body: AWSAccount,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createNewAWSExternalID");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/aws/generate_new_external_id";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AWSIntegrationApi.createNewAWSExternalID")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "AWSAccount", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteAWSAccount(
    body: AWSAccountDeleteRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteAWSAccount");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/aws";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AWSIntegrationApi.deleteAWSAccount")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "AWSAccountDeleteRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteAWSEventBridgeSource(
    body: AWSEventBridgeDeleteRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteAWSEventBridgeSource");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/aws/event_bridge";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AWSIntegrationApi.deleteAWSEventBridgeSource")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "AWSEventBridgeDeleteRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteAWSTagFilter(
    body: AWSTagFilterDeleteRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteAWSTagFilter");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/aws/filtering";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AWSIntegrationApi.deleteAWSTagFilter")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "AWSTagFilterDeleteRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listAvailableAWSNamespaces(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/integration/aws/available_namespace_rules";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AWSIntegrationApi.listAvailableAWSNamespaces")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listAWSAccounts(
    accountId?: string,
    roleName?: string,
    accessKeyId?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/integration/aws";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AWSIntegrationApi.listAWSAccounts")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (accountId !== undefined) {
      requestContext.setQueryParam(
        "account_id",
        ObjectSerializer.serialize(accountId, "string", ""),
        "",
      );
    }
    if (roleName !== undefined) {
      requestContext.setQueryParam(
        "role_name",
        ObjectSerializer.serialize(roleName, "string", ""),
        "",
      );
    }
    if (accessKeyId !== undefined) {
      requestContext.setQueryParam(
        "access_key_id",
        ObjectSerializer.serialize(accessKeyId, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listAWSEventBridgeSources(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/integration/aws/event_bridge";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AWSIntegrationApi.listAWSEventBridgeSources")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listAWSTagFilters(
    accountId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new RequiredError("accountId", "listAWSTagFilters");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/aws/filtering";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AWSIntegrationApi.listAWSTagFilters")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (accountId !== undefined) {
      requestContext.setQueryParam(
        "account_id",
        ObjectSerializer.serialize(accountId, "string", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateAWSAccount(
    body: AWSAccount,
    accountId?: string,
    roleName?: string,
    accessKeyId?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateAWSAccount");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/aws";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.AWSIntegrationApi.updateAWSAccount")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (accountId !== undefined) {
      requestContext.setQueryParam(
        "account_id",
        ObjectSerializer.serialize(accountId, "string", ""),
        "",
      );
    }
    if (roleName !== undefined) {
      requestContext.setQueryParam(
        "role_name",
        ObjectSerializer.serialize(roleName, "string", ""),
        "",
      );
    }
    if (accessKeyId !== undefined) {
      requestContext.setQueryParam(
        "access_key_id",
        ObjectSerializer.serialize(accessKeyId, "string", ""),
        "",
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "AWSAccount", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class AWSIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAWSAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAWSAccount(
    response: ResponseContext,
  ): Promise<AWSAccountCreateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: AWSAccountCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountCreateResponse",
      ) as AWSAccountCreateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AWSAccountCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountCreateResponse",
        "",
      ) as AWSAccountCreateResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAWSEventBridgeSource
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAWSEventBridgeSource(
    response: ResponseContext,
  ): Promise<AWSEventBridgeCreateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: AWSEventBridgeCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSEventBridgeCreateResponse",
      ) as AWSEventBridgeCreateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AWSEventBridgeCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSEventBridgeCreateResponse",
        "",
      ) as AWSEventBridgeCreateResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAWSTagFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAWSTagFilter(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
      ) as any;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        "",
      ) as any;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createNewAWSExternalID
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createNewAWSExternalID(
    response: ResponseContext,
  ): Promise<AWSAccountCreateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: AWSAccountCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountCreateResponse",
      ) as AWSAccountCreateResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AWSAccountCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountCreateResponse",
        "",
      ) as AWSAccountCreateResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteAWSAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAWSAccount(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
      ) as any;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        "",
      ) as any;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteAWSEventBridgeSource
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAWSEventBridgeSource(
    response: ResponseContext,
  ): Promise<AWSEventBridgeDeleteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: AWSEventBridgeDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSEventBridgeDeleteResponse",
      ) as AWSEventBridgeDeleteResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AWSEventBridgeDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSEventBridgeDeleteResponse",
        "",
      ) as AWSEventBridgeDeleteResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteAWSTagFilter
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAWSTagFilter(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
      ) as any;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        "",
      ) as any;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listAvailableAWSNamespaces
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAvailableAWSNamespaces(
    response: ResponseContext,
  ): Promise<Array<string>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: Array<string> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<string>",
      ) as Array<string>;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<string> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<string>",
        "",
      ) as Array<string>;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listAWSAccounts
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAWSAccounts(
    response: ResponseContext,
  ): Promise<AWSAccountListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: AWSAccountListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountListResponse",
      ) as AWSAccountListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AWSAccountListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSAccountListResponse",
        "",
      ) as AWSAccountListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listAWSEventBridgeSources
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAWSEventBridgeSources(
    response: ResponseContext,
  ): Promise<AWSEventBridgeListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: AWSEventBridgeListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSEventBridgeListResponse",
      ) as AWSEventBridgeListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AWSEventBridgeListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSEventBridgeListResponse",
        "",
      ) as AWSEventBridgeListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listAWSTagFilters
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAWSTagFilters(
    response: ResponseContext,
  ): Promise<AWSTagFilterListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: AWSTagFilterListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSTagFilterListResponse",
      ) as AWSTagFilterListResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AWSTagFilterListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AWSTagFilterListResponse",
        "",
      ) as AWSTagFilterListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateAWSAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAWSAccount(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
      ) as any;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409 ||
      response.httpStatusCode === 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType,
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse",
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        "",
      ) as any;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface AWSIntegrationApiCreateAWSAccountRequest {
  /**
   * AWS Request Object
   * @type AWSAccount
   */
  body: AWSAccount;
}

export interface AWSIntegrationApiCreateAWSEventBridgeSourceRequest {
  /**
   * Create an Amazon EventBridge source for an AWS account with a given name and region.
   * @type AWSEventBridgeCreateRequest
   */
  body: AWSEventBridgeCreateRequest;
}

export interface AWSIntegrationApiCreateAWSTagFilterRequest {
  /**
   * Set an AWS tag filter using an `aws_account_identifier`, `namespace`, and filtering string.
   * Namespace options are `application_elb`, `elb`, `lambda`, `network_elb`, `rds`, `sqs`, and `custom`.
   * @type AWSTagFilterCreateRequest
   */
  body: AWSTagFilterCreateRequest;
}

export interface AWSIntegrationApiCreateNewAWSExternalIDRequest {
  /**
   * Your Datadog role delegation name.
   * For more information about your AWS account Role name,
   * see the [Datadog AWS integration configuration info](https://docs.datadoghq.com/integrations/amazon_web_services/#setup).
   * @type AWSAccount
   */
  body: AWSAccount;
}

export interface AWSIntegrationApiDeleteAWSAccountRequest {
  /**
   * AWS request object
   * @type AWSAccountDeleteRequest
   */
  body: AWSAccountDeleteRequest;
}

export interface AWSIntegrationApiDeleteAWSEventBridgeSourceRequest {
  /**
   * Delete the Amazon EventBridge source with the given name, region, and associated AWS account.
   * @type AWSEventBridgeDeleteRequest
   */
  body: AWSEventBridgeDeleteRequest;
}

export interface AWSIntegrationApiDeleteAWSTagFilterRequest {
  /**
   * Delete a tag filtering entry for a given AWS account and `dd-aws` namespace.
   * @type AWSTagFilterDeleteRequest
   */
  body: AWSTagFilterDeleteRequest;
}

export interface AWSIntegrationApiListAWSAccountsRequest {
  /**
   * Only return AWS accounts that matches this `account_id`.
   * @type string
   */
  accountId?: string;
  /**
   * Only return AWS accounts that matches this role_name.
   * @type string
   */
  roleName?: string;
  /**
   * Only return AWS accounts that matches this `access_key_id`.
   * @type string
   */
  accessKeyId?: string;
}

export interface AWSIntegrationApiListAWSTagFiltersRequest {
  /**
   * Only return AWS filters that matches this `account_id`.
   * @type string
   */
  accountId: string;
}

export interface AWSIntegrationApiUpdateAWSAccountRequest {
  /**
   * AWS request object
   * @type AWSAccount
   */
  body: AWSAccount;
  /**
   * Only return AWS accounts that matches this `account_id`.
   * @type string
   */
  accountId?: string;
  /**
   * Only return AWS accounts that match this `role_name`.
   * Required if `account_id` is specified.
   * @type string
   */
  roleName?: string;
  /**
   * Only return AWS accounts that matches this `access_key_id`.
   * Required if none of the other two options are specified.
   * @type string
   */
  accessKeyId?: string;
}

export class AWSIntegrationApi {
  private requestFactory: AWSIntegrationApiRequestFactory;
  private responseProcessor: AWSIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: AWSIntegrationApiRequestFactory,
    responseProcessor?: AWSIntegrationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new AWSIntegrationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new AWSIntegrationApiResponseProcessor();
  }

  /**
   * Create a Datadog-Amazon Web Services integration.
   * Using the `POST` method updates your integration configuration
   * by adding your new configuration to the existing one in your Datadog organization.
   * A unique AWS Account ID for role based authentication.
   * @param param The request object
   */
  public createAWSAccount(
    param: AWSIntegrationApiCreateAWSAccountRequest,
    options?: Configuration,
  ): Promise<AWSAccountCreateResponse> {
    const requestContextPromise = this.requestFactory.createAWSAccount(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAWSAccount(responseContext);
        });
    });
  }

  /**
   * Create an Amazon EventBridge source.
   * @param param The request object
   */
  public createAWSEventBridgeSource(
    param: AWSIntegrationApiCreateAWSEventBridgeSourceRequest,
    options?: Configuration,
  ): Promise<AWSEventBridgeCreateResponse> {
    const requestContextPromise =
      this.requestFactory.createAWSEventBridgeSource(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAWSEventBridgeSource(
            responseContext,
          );
        });
    });
  }

  /**
   * Set an AWS tag filter.
   * @param param The request object
   */
  public createAWSTagFilter(
    param: AWSIntegrationApiCreateAWSTagFilterRequest,
    options?: Configuration,
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.createAWSTagFilter(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAWSTagFilter(responseContext);
        });
    });
  }

  /**
   * Generate a new AWS external ID for a given AWS account ID and role name pair.
   * @param param The request object
   */
  public createNewAWSExternalID(
    param: AWSIntegrationApiCreateNewAWSExternalIDRequest,
    options?: Configuration,
  ): Promise<AWSAccountCreateResponse> {
    const requestContextPromise = this.requestFactory.createNewAWSExternalID(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createNewAWSExternalID(responseContext);
        });
    });
  }

  /**
   * Delete a Datadog-AWS integration matching the specified `account_id` and `role_name parameters`.
   * @param param The request object
   */
  public deleteAWSAccount(
    param: AWSIntegrationApiDeleteAWSAccountRequest,
    options?: Configuration,
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.deleteAWSAccount(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAWSAccount(responseContext);
        });
    });
  }

  /**
   * Delete an Amazon EventBridge source.
   * @param param The request object
   */
  public deleteAWSEventBridgeSource(
    param: AWSIntegrationApiDeleteAWSEventBridgeSourceRequest,
    options?: Configuration,
  ): Promise<AWSEventBridgeDeleteResponse> {
    const requestContextPromise =
      this.requestFactory.deleteAWSEventBridgeSource(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAWSEventBridgeSource(
            responseContext,
          );
        });
    });
  }

  /**
   * Delete a tag filtering entry.
   * @param param The request object
   */
  public deleteAWSTagFilter(
    param: AWSIntegrationApiDeleteAWSTagFilterRequest,
    options?: Configuration,
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.deleteAWSTagFilter(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAWSTagFilter(responseContext);
        });
    });
  }

  /**
   * List all namespace rules for a given Datadog-AWS integration. This endpoint takes no arguments.
   * @param param The request object
   */
  public listAvailableAWSNamespaces(
    options?: Configuration,
  ): Promise<Array<string>> {
    const requestContextPromise =
      this.requestFactory.listAvailableAWSNamespaces(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAvailableAWSNamespaces(
            responseContext,
          );
        });
    });
  }

  /**
   * List all Datadog-AWS integrations available in your Datadog organization.
   * @param param The request object
   */
  public listAWSAccounts(
    param: AWSIntegrationApiListAWSAccountsRequest = {},
    options?: Configuration,
  ): Promise<AWSAccountListResponse> {
    const requestContextPromise = this.requestFactory.listAWSAccounts(
      param.accountId,
      param.roleName,
      param.accessKeyId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAWSAccounts(responseContext);
        });
    });
  }

  /**
   * Get all Amazon EventBridge sources.
   * @param param The request object
   */
  public listAWSEventBridgeSources(
    options?: Configuration,
  ): Promise<AWSEventBridgeListResponse> {
    const requestContextPromise =
      this.requestFactory.listAWSEventBridgeSources(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAWSEventBridgeSources(
            responseContext,
          );
        });
    });
  }

  /**
   * Get all AWS tag filters.
   * @param param The request object
   */
  public listAWSTagFilters(
    param: AWSIntegrationApiListAWSTagFiltersRequest,
    options?: Configuration,
  ): Promise<AWSTagFilterListResponse> {
    const requestContextPromise = this.requestFactory.listAWSTagFilters(
      param.accountId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAWSTagFilters(responseContext);
        });
    });
  }

  /**
   * Update a Datadog-Amazon Web Services integration.
   * @param param The request object
   */
  public updateAWSAccount(
    param: AWSIntegrationApiUpdateAWSAccountRequest,
    options?: Configuration,
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.updateAWSAccount(
      param.body,
      param.accountId,
      param.roleName,
      param.accessKeyId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAWSAccount(responseContext);
        });
    });
  }
}
