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
import { SensitiveDataScannerConfigRequest } from "./models/SensitiveDataScannerConfigRequest";
import { SensitiveDataScannerCreateGroupResponse } from "./models/SensitiveDataScannerCreateGroupResponse";
import { SensitiveDataScannerCreateRuleResponse } from "./models/SensitiveDataScannerCreateRuleResponse";
import { SensitiveDataScannerGetConfigResponse } from "./models/SensitiveDataScannerGetConfigResponse";
import { SensitiveDataScannerGroupCreateRequest } from "./models/SensitiveDataScannerGroupCreateRequest";
import { SensitiveDataScannerGroupDeleteRequest } from "./models/SensitiveDataScannerGroupDeleteRequest";
import { SensitiveDataScannerGroupDeleteResponse } from "./models/SensitiveDataScannerGroupDeleteResponse";
import { SensitiveDataScannerGroupUpdateRequest } from "./models/SensitiveDataScannerGroupUpdateRequest";
import { SensitiveDataScannerGroupUpdateResponse } from "./models/SensitiveDataScannerGroupUpdateResponse";
import { SensitiveDataScannerReorderGroupsResponse } from "./models/SensitiveDataScannerReorderGroupsResponse";
import { SensitiveDataScannerRuleCreateRequest } from "./models/SensitiveDataScannerRuleCreateRequest";
import { SensitiveDataScannerRuleDeleteRequest } from "./models/SensitiveDataScannerRuleDeleteRequest";
import { SensitiveDataScannerRuleDeleteResponse } from "./models/SensitiveDataScannerRuleDeleteResponse";
import { SensitiveDataScannerRuleUpdateRequest } from "./models/SensitiveDataScannerRuleUpdateRequest";
import { SensitiveDataScannerRuleUpdateResponse } from "./models/SensitiveDataScannerRuleUpdateResponse";
import { SensitiveDataScannerStandardPatternsResponseData } from "./models/SensitiveDataScannerStandardPatternsResponseData";

export class SensitiveDataScannerApiRequestFactory extends BaseAPIRequestFactory {
  public async createScanningGroup(
    body: SensitiveDataScannerGroupCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createScanningGroup");
    }

    // Path Params
    const localVarPath = "/api/v2/sensitive-data-scanner/config/groups";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.SensitiveDataScannerApi.createScanningGroup")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "SensitiveDataScannerGroupCreateRequest", ""),
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

  public async createScanningRule(
    body: SensitiveDataScannerRuleCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createScanningRule");
    }

    // Path Params
    const localVarPath = "/api/v2/sensitive-data-scanner/config/rules";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.SensitiveDataScannerApi.createScanningRule")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "SensitiveDataScannerRuleCreateRequest", ""),
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

  public async deleteScanningGroup(
    groupId: string,
    body: SensitiveDataScannerGroupDeleteRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new RequiredError("groupId", "deleteScanningGroup");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteScanningGroup");
    }

    // Path Params
    const localVarPath = "/api/v2/sensitive-data-scanner/config/groups/{group_id}".replace(
      "{group_id}",
      encodeURIComponent(String(groupId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.SensitiveDataScannerApi.deleteScanningGroup")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "SensitiveDataScannerGroupDeleteRequest", ""),
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

  public async deleteScanningRule(
    ruleId: string,
    body: SensitiveDataScannerRuleDeleteRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "deleteScanningRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteScanningRule");
    }

    // Path Params
    const localVarPath = "/api/v2/sensitive-data-scanner/config/rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.SensitiveDataScannerApi.deleteScanningRule")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "SensitiveDataScannerRuleDeleteRequest", ""),
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

  public async listScanningGroups(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/sensitive-data-scanner/config";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.SensitiveDataScannerApi.listScanningGroups")
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

  public async listStandardPatterns(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/sensitive-data-scanner/config/standard-patterns";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.SensitiveDataScannerApi.listStandardPatterns")
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

  public async reorderScanningGroups(
    body: SensitiveDataScannerConfigRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "reorderScanningGroups");
    }

    // Path Params
    const localVarPath = "/api/v2/sensitive-data-scanner/config";

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.SensitiveDataScannerApi.reorderScanningGroups")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "SensitiveDataScannerConfigRequest", ""),
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

  public async updateScanningGroup(
    groupId: string,
    body: SensitiveDataScannerGroupUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'groupId' is not null or undefined
    if (groupId === null || groupId === undefined) {
      throw new RequiredError("groupId", "updateScanningGroup");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateScanningGroup");
    }

    // Path Params
    const localVarPath = "/api/v2/sensitive-data-scanner/config/groups/{group_id}".replace(
      "{group_id}",
      encodeURIComponent(String(groupId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.SensitiveDataScannerApi.updateScanningGroup")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "SensitiveDataScannerGroupUpdateRequest", ""),
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

  public async updateScanningRule(
    ruleId: string,
    body: SensitiveDataScannerRuleUpdateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'ruleId' is not null or undefined
    if (ruleId === null || ruleId === undefined) {
      throw new RequiredError("ruleId", "updateScanningRule");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateScanningRule");
    }

    // Path Params
    const localVarPath = "/api/v2/sensitive-data-scanner/config/rules/{rule_id}".replace(
      "{rule_id}",
      encodeURIComponent(String(ruleId)),
    );

    // Make Request Context
    const requestContext = _config
      .getServer("0.0.1.SensitiveDataScannerApi.updateScanningRule")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize("body", "SensitiveDataScannerRuleUpdateRequest", ""),
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

export class SensitiveDataScannerApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createScanningGroup
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createScanningGroup(
    response: ResponseContext,
  ): Promise<SensitiveDataScannerCreateGroupResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: SensitiveDataScannerCreateGroupResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SensitiveDataScannerCreateGroupResponse",
      ) as SensitiveDataScannerCreateGroupResponse;
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SensitiveDataScannerCreateGroupResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SensitiveDataScannerCreateGroupResponse",
        "",
      ) as SensitiveDataScannerCreateGroupResponse;
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
   * @params response Response returned by the server for a request to createScanningRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createScanningRule(
    response: ResponseContext,
  ): Promise<SensitiveDataScannerCreateRuleResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: SensitiveDataScannerCreateRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SensitiveDataScannerCreateRuleResponse",
      ) as SensitiveDataScannerCreateRuleResponse;
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SensitiveDataScannerCreateRuleResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SensitiveDataScannerCreateRuleResponse",
        "",
      ) as SensitiveDataScannerCreateRuleResponse;
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
   * @params response Response returned by the server for a request to deleteScanningGroup
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteScanningGroup(
    response: ResponseContext,
  ): Promise<SensitiveDataScannerGroupDeleteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: SensitiveDataScannerGroupDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SensitiveDataScannerGroupDeleteResponse",
      ) as SensitiveDataScannerGroupDeleteResponse;
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SensitiveDataScannerGroupDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SensitiveDataScannerGroupDeleteResponse",
        "",
      ) as SensitiveDataScannerGroupDeleteResponse;
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
   * @params response Response returned by the server for a request to deleteScanningRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteScanningRule(
    response: ResponseContext,
  ): Promise<SensitiveDataScannerRuleDeleteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: SensitiveDataScannerRuleDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SensitiveDataScannerRuleDeleteResponse",
      ) as SensitiveDataScannerRuleDeleteResponse;
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SensitiveDataScannerRuleDeleteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SensitiveDataScannerRuleDeleteResponse",
        "",
      ) as SensitiveDataScannerRuleDeleteResponse;
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
   * @params response Response returned by the server for a request to listScanningGroups
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listScanningGroups(
    response: ResponseContext,
  ): Promise<SensitiveDataScannerGetConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: SensitiveDataScannerGetConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SensitiveDataScannerGetConfigResponse",
      ) as SensitiveDataScannerGetConfigResponse;
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SensitiveDataScannerGetConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SensitiveDataScannerGetConfigResponse",
        "",
      ) as SensitiveDataScannerGetConfigResponse;
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
   * @params response Response returned by the server for a request to listStandardPatterns
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listStandardPatterns(
    response: ResponseContext,
  ): Promise<SensitiveDataScannerStandardPatternsResponseData> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: SensitiveDataScannerStandardPatternsResponseData = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SensitiveDataScannerStandardPatternsResponseData",
      ) as SensitiveDataScannerStandardPatternsResponseData;
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SensitiveDataScannerStandardPatternsResponseData = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SensitiveDataScannerStandardPatternsResponseData",
        "",
      ) as SensitiveDataScannerStandardPatternsResponseData;
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
   * @params response Response returned by the server for a request to reorderScanningGroups
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async reorderScanningGroups(
    response: ResponseContext,
  ): Promise<SensitiveDataScannerReorderGroupsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: SensitiveDataScannerReorderGroupsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SensitiveDataScannerReorderGroupsResponse",
      ) as SensitiveDataScannerReorderGroupsResponse;
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SensitiveDataScannerReorderGroupsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SensitiveDataScannerReorderGroupsResponse",
        "",
      ) as SensitiveDataScannerReorderGroupsResponse;
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
   * @params response Response returned by the server for a request to updateScanningGroup
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateScanningGroup(
    response: ResponseContext,
  ): Promise<SensitiveDataScannerGroupUpdateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: SensitiveDataScannerGroupUpdateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SensitiveDataScannerGroupUpdateResponse",
      ) as SensitiveDataScannerGroupUpdateResponse;
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SensitiveDataScannerGroupUpdateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SensitiveDataScannerGroupUpdateResponse",
        "",
      ) as SensitiveDataScannerGroupUpdateResponse;
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
   * @params response Response returned by the server for a request to updateScanningRule
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateScanningRule(
    response: ResponseContext,
  ): Promise<SensitiveDataScannerRuleUpdateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (response.httpStatusCode === 200) {
      const body: SensitiveDataScannerRuleUpdateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SensitiveDataScannerRuleUpdateResponse",
      ) as SensitiveDataScannerRuleUpdateResponse;
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
      throw new ApiException<APIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SensitiveDataScannerRuleUpdateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SensitiveDataScannerRuleUpdateResponse",
        "",
      ) as SensitiveDataScannerRuleUpdateResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface SensitiveDataScannerApiCreateScanningGroupRequest {
  /**
   * @type SensitiveDataScannerGroupCreateRequest
   */
  body: SensitiveDataScannerGroupCreateRequest;
}

export interface SensitiveDataScannerApiCreateScanningRuleRequest {
  /**
   * @type SensitiveDataScannerRuleCreateRequest
   */
  body: SensitiveDataScannerRuleCreateRequest;
}

export interface SensitiveDataScannerApiDeleteScanningGroupRequest {
  /**
   * The ID of a group of rules.
   * @type string
   */
  groupId: string;
  /**
   * @type SensitiveDataScannerGroupDeleteRequest
   */
  body: SensitiveDataScannerGroupDeleteRequest;
}

export interface SensitiveDataScannerApiDeleteScanningRuleRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
  /**
   * @type SensitiveDataScannerRuleDeleteRequest
   */
  body: SensitiveDataScannerRuleDeleteRequest;
}

export interface SensitiveDataScannerApiReorderScanningGroupsRequest {
  /**
   * @type SensitiveDataScannerConfigRequest
   */
  body: SensitiveDataScannerConfigRequest;
}

export interface SensitiveDataScannerApiUpdateScanningGroupRequest {
  /**
   * The ID of a group of rules.
   * @type string
   */
  groupId: string;
  /**
   * @type SensitiveDataScannerGroupUpdateRequest
   */
  body: SensitiveDataScannerGroupUpdateRequest;
}

export interface SensitiveDataScannerApiUpdateScanningRuleRequest {
  /**
   * The ID of the rule.
   * @type string
   */
  ruleId: string;
  /**
   * @type SensitiveDataScannerRuleUpdateRequest
   */
  body: SensitiveDataScannerRuleUpdateRequest;
}

export class SensitiveDataScannerApi {
  private requestFactory: SensitiveDataScannerApiRequestFactory;
  private responseProcessor: SensitiveDataScannerApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration?: Configuration,
    requestFactory?: SensitiveDataScannerApiRequestFactory,
    responseProcessor?: SensitiveDataScannerApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new SensitiveDataScannerApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new SensitiveDataScannerApiResponseProcessor();
  }

  /**
   * Create a scanning group.
   * The request MAY include a configuration relationship.
   * A rules relationship can be omitted entirely, but if it is included it MUST be
   * null or an empty array (rules cannot be created at the same time).
   * The new group will be ordered last within the configuration.
   * @param param The request object
   */
  public createScanningGroup(
    param: SensitiveDataScannerApiCreateScanningGroupRequest,
    options?: Configuration,
  ): Promise<SensitiveDataScannerCreateGroupResponse> {
    const requestContextPromise = this.requestFactory.createScanningGroup(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createScanningGroup(responseContext);
        });
    });
  }

  /**
   * Create a scanning rule in a sensitive data scanner group, ordered last.
   * The posted rule MUST include a group relationship.
   * It MUST include either a standard_pattern relationship or a regex attribute, but not both.
   * If included_attributes is empty or missing, we will scan all attributes except
   * excluded_attributes. If both are missing, we will scan the whole event.
   * @param param The request object
   */
  public createScanningRule(
    param: SensitiveDataScannerApiCreateScanningRuleRequest,
    options?: Configuration,
  ): Promise<SensitiveDataScannerCreateRuleResponse> {
    const requestContextPromise = this.requestFactory.createScanningRule(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createScanningRule(responseContext);
        });
    });
  }

  /**
   * Delete a given group.
   * @param param The request object
   */
  public deleteScanningGroup(
    param: SensitiveDataScannerApiDeleteScanningGroupRequest,
    options?: Configuration,
  ): Promise<SensitiveDataScannerGroupDeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteScanningGroup(
      param.groupId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteScanningGroup(responseContext);
        });
    });
  }

  /**
   * Delete a given rule.
   * @param param The request object
   */
  public deleteScanningRule(
    param: SensitiveDataScannerApiDeleteScanningRuleRequest,
    options?: Configuration,
  ): Promise<SensitiveDataScannerRuleDeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteScanningRule(
      param.ruleId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteScanningRule(responseContext);
        });
    });
  }

  /**
   * List all the Scanning groups in your organization.
   * @param param The request object
   */
  public listScanningGroups(options?: Configuration,
  ): Promise<SensitiveDataScannerGetConfigResponse> {
    const requestContextPromise = this.requestFactory.listScanningGroups(
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listScanningGroups(responseContext);
        });
    });
  }

  /**
   * Returns all standard patterns.
   * @param param The request object
   */
  public listStandardPatterns(options?: Configuration,
  ): Promise<SensitiveDataScannerStandardPatternsResponseData> {
    const requestContextPromise = this.requestFactory.listStandardPatterns(
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listStandardPatterns(responseContext);
        });
    });
  }

  /**
   * Reorder the list of groups.
   * @param param The request object
   */
  public reorderScanningGroups(
    param: SensitiveDataScannerApiReorderScanningGroupsRequest,
    options?: Configuration,
  ): Promise<SensitiveDataScannerReorderGroupsResponse> {
    const requestContextPromise = this.requestFactory.reorderScanningGroups(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.reorderScanningGroups(responseContext);
        });
    });
  }

  /**
   * Update a group, including the order of the rules.
   * Rules within the group are reordered by including a rules relationship. If the rules
   * relationship is present, its data section MUST contain linkages for all of the rules
   * currently in the group, and MUST NOT contain any others.
   * @param param The request object
   */
  public updateScanningGroup(
    param: SensitiveDataScannerApiUpdateScanningGroupRequest,
    options?: Configuration,
  ): Promise<SensitiveDataScannerGroupUpdateResponse> {
    const requestContextPromise = this.requestFactory.updateScanningGroup(
      param.groupId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateScanningGroup(responseContext);
        });
    });
  }

  /**
   * Update a scanning rule.
   * The request body MUST NOT include a standard_pattern relationship, as that relationship
   * is non-editable. Trying to edit the regex attribute of a rule with a standard_pattern
   * relationship will also result in an error.
   * @param param The request object
   */
  public updateScanningRule(
    param: SensitiveDataScannerApiUpdateScanningRuleRequest,
    options?: Configuration,
  ): Promise<SensitiveDataScannerRuleUpdateResponse> {
    const requestContextPromise = this.requestFactory.updateScanningRule(
      param.ruleId,
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateScanningRule(responseContext);
        });
    });
  }
}
