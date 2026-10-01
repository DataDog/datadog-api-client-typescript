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
import { AWSCloudAuthPersonaMappingCreateRequest } from "../models/AWSCloudAuthPersonaMappingCreateRequest";
import { AWSCloudAuthPersonaMappingResponse } from "../models/AWSCloudAuthPersonaMappingResponse";
import { AWSCloudAuthPersonaMappingsResponse } from "../models/AWSCloudAuthPersonaMappingsResponse";
import { GitHubCloudAuthIntakeMappingCreateRequest } from "../models/GitHubCloudAuthIntakeMappingCreateRequest";
import { GitHubCloudAuthIntakeMappingResponse } from "../models/GitHubCloudAuthIntakeMappingResponse";
import { GitHubCloudAuthIntakeMappingsResponse } from "../models/GitHubCloudAuthIntakeMappingsResponse";
import { GitHubCloudAuthPersonaMappingCreateRequest } from "../models/GitHubCloudAuthPersonaMappingCreateRequest";
import { GitHubCloudAuthPersonaMappingResponse } from "../models/GitHubCloudAuthPersonaMappingResponse";
import { GitHubCloudAuthPersonaMappingsResponse } from "../models/GitHubCloudAuthPersonaMappingsResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class CloudAuthenticationApiRequestFactory extends BaseAPIRequestFactory {
  public async createAWSCloudAuthPersonaMapping(
    body: AWSCloudAuthPersonaMappingCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createAWSCloudAuthPersonaMapping'");
    if (!_config.unstableOperations["v2.createAWSCloudAuthPersonaMapping"]) {
      throw new Error(
        "Unstable operation 'createAWSCloudAuthPersonaMapping' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAWSCloudAuthPersonaMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/cloud_auth/aws/persona_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.createAWSCloudAuthPersonaMapping")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "AWSCloudAuthPersonaMappingCreateRequest",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async createGitHubCloudAuthIntakeMapping(
    body: GitHubCloudAuthIntakeMappingCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createGitHubCloudAuthIntakeMapping'"
    );
    if (!_config.unstableOperations["v2.createGitHubCloudAuthIntakeMapping"]) {
      throw new Error(
        "Unstable operation 'createGitHubCloudAuthIntakeMapping' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createGitHubCloudAuthIntakeMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/cloud_auth/github/intake_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.createGitHubCloudAuthIntakeMapping")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "GitHubCloudAuthIntakeMappingCreateRequest",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async createGitHubCloudAuthPersonaMapping(
    body: GitHubCloudAuthPersonaMappingCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'createGitHubCloudAuthPersonaMapping'"
    );
    if (!_config.unstableOperations["v2.createGitHubCloudAuthPersonaMapping"]) {
      throw new Error(
        "Unstable operation 'createGitHubCloudAuthPersonaMapping' is disabled"
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createGitHubCloudAuthPersonaMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/cloud_auth/github/persona_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.CloudAuthenticationApi.createGitHubCloudAuthPersonaMapping"
      )
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "GitHubCloudAuthPersonaMappingCreateRequest",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteAWSCloudAuthPersonaMapping(
    personaMappingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'deleteAWSCloudAuthPersonaMapping'");
    if (!_config.unstableOperations["v2.deleteAWSCloudAuthPersonaMapping"]) {
      throw new Error(
        "Unstable operation 'deleteAWSCloudAuthPersonaMapping' is disabled"
      );
    }

    // verify required parameter 'personaMappingId' is not null or undefined
    if (personaMappingId === null || personaMappingId === undefined) {
      throw new RequiredError(
        "personaMappingId",
        "deleteAWSCloudAuthPersonaMapping"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/cloud_auth/aws/persona_mapping/{persona_mapping_id}".replace(
        "{persona_mapping_id}",
        encodeURIComponent(String(personaMappingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.deleteAWSCloudAuthPersonaMapping")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteGitHubCloudAuthIntakeMapping(
    intakeMappingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteGitHubCloudAuthIntakeMapping'"
    );
    if (!_config.unstableOperations["v2.deleteGitHubCloudAuthIntakeMapping"]) {
      throw new Error(
        "Unstable operation 'deleteGitHubCloudAuthIntakeMapping' is disabled"
      );
    }

    // verify required parameter 'intakeMappingId' is not null or undefined
    if (intakeMappingId === null || intakeMappingId === undefined) {
      throw new RequiredError(
        "intakeMappingId",
        "deleteGitHubCloudAuthIntakeMapping"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/cloud_auth/github/intake_mapping/{intake_mapping_id}".replace(
        "{intake_mapping_id}",
        encodeURIComponent(String(intakeMappingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.deleteGitHubCloudAuthIntakeMapping")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteGitHubCloudAuthPersonaMapping(
    personaMappingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'deleteGitHubCloudAuthPersonaMapping'"
    );
    if (!_config.unstableOperations["v2.deleteGitHubCloudAuthPersonaMapping"]) {
      throw new Error(
        "Unstable operation 'deleteGitHubCloudAuthPersonaMapping' is disabled"
      );
    }

    // verify required parameter 'personaMappingId' is not null or undefined
    if (personaMappingId === null || personaMappingId === undefined) {
      throw new RequiredError(
        "personaMappingId",
        "deleteGitHubCloudAuthPersonaMapping"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/cloud_auth/github/persona_mapping/{persona_mapping_id}".replace(
        "{persona_mapping_id}",
        encodeURIComponent(String(personaMappingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer(
        "v2.CloudAuthenticationApi.deleteGitHubCloudAuthPersonaMapping"
      )
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getAWSCloudAuthPersonaMapping(
    personaMappingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getAWSCloudAuthPersonaMapping'");
    if (!_config.unstableOperations["v2.getAWSCloudAuthPersonaMapping"]) {
      throw new Error(
        "Unstable operation 'getAWSCloudAuthPersonaMapping' is disabled"
      );
    }

    // verify required parameter 'personaMappingId' is not null or undefined
    if (personaMappingId === null || personaMappingId === undefined) {
      throw new RequiredError(
        "personaMappingId",
        "getAWSCloudAuthPersonaMapping"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/cloud_auth/aws/persona_mapping/{persona_mapping_id}".replace(
        "{persona_mapping_id}",
        encodeURIComponent(String(personaMappingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.getAWSCloudAuthPersonaMapping")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getGitHubCloudAuthIntakeMapping(
    intakeMappingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getGitHubCloudAuthIntakeMapping'");
    if (!_config.unstableOperations["v2.getGitHubCloudAuthIntakeMapping"]) {
      throw new Error(
        "Unstable operation 'getGitHubCloudAuthIntakeMapping' is disabled"
      );
    }

    // verify required parameter 'intakeMappingId' is not null or undefined
    if (intakeMappingId === null || intakeMappingId === undefined) {
      throw new RequiredError(
        "intakeMappingId",
        "getGitHubCloudAuthIntakeMapping"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/cloud_auth/github/intake_mapping/{intake_mapping_id}".replace(
        "{intake_mapping_id}",
        encodeURIComponent(String(intakeMappingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.getGitHubCloudAuthIntakeMapping")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getGitHubCloudAuthPersonaMapping(
    personaMappingId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getGitHubCloudAuthPersonaMapping'");
    if (!_config.unstableOperations["v2.getGitHubCloudAuthPersonaMapping"]) {
      throw new Error(
        "Unstable operation 'getGitHubCloudAuthPersonaMapping' is disabled"
      );
    }

    // verify required parameter 'personaMappingId' is not null or undefined
    if (personaMappingId === null || personaMappingId === undefined) {
      throw new RequiredError(
        "personaMappingId",
        "getGitHubCloudAuthPersonaMapping"
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/cloud_auth/github/persona_mapping/{persona_mapping_id}".replace(
        "{persona_mapping_id}",
        encodeURIComponent(String(personaMappingId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.getGitHubCloudAuthPersonaMapping")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listAWSCloudAuthPersonaMappings(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listAWSCloudAuthPersonaMappings'");
    if (!_config.unstableOperations["v2.listAWSCloudAuthPersonaMappings"]) {
      throw new Error(
        "Unstable operation 'listAWSCloudAuthPersonaMappings' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/cloud_auth/aws/persona_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.listAWSCloudAuthPersonaMappings")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listGitHubCloudAuthIntakeMappings(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listGitHubCloudAuthIntakeMappings'");
    if (!_config.unstableOperations["v2.listGitHubCloudAuthIntakeMappings"]) {
      throw new Error(
        "Unstable operation 'listGitHubCloudAuthIntakeMappings' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/cloud_auth/github/intake_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.listGitHubCloudAuthIntakeMappings")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listGitHubCloudAuthPersonaMappings(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn(
      "Using unstable operation 'listGitHubCloudAuthPersonaMappings'"
    );
    if (!_config.unstableOperations["v2.listGitHubCloudAuthPersonaMappings"]) {
      throw new Error(
        "Unstable operation 'listGitHubCloudAuthPersonaMappings' is disabled"
      );
    }

    // Path Params
    const localVarPath = "/api/v2/cloud_auth/github/persona_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.CloudAuthenticationApi.listGitHubCloudAuthPersonaMappings")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class CloudAuthenticationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAWSCloudAuthPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAWSCloudAuthPersonaMapping(
    response: ResponseContext
  ): Promise<AWSCloudAuthPersonaMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AWSCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AWSCloudAuthPersonaMappingResponse"
        ) as AWSCloudAuthPersonaMappingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: AWSCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AWSCloudAuthPersonaMappingResponse",
          ""
        ) as AWSCloudAuthPersonaMappingResponse;
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
   * @params response Response returned by the server for a request to createGitHubCloudAuthIntakeMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createGitHubCloudAuthIntakeMapping(
    response: ResponseContext
  ): Promise<GitHubCloudAuthIntakeMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: GitHubCloudAuthIntakeMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GitHubCloudAuthIntakeMappingResponse"
        ) as GitHubCloudAuthIntakeMappingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: GitHubCloudAuthIntakeMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GitHubCloudAuthIntakeMappingResponse",
          ""
        ) as GitHubCloudAuthIntakeMappingResponse;
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
   * @params response Response returned by the server for a request to createGitHubCloudAuthPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createGitHubCloudAuthPersonaMapping(
    response: ResponseContext
  ): Promise<GitHubCloudAuthPersonaMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: GitHubCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GitHubCloudAuthPersonaMappingResponse"
        ) as GitHubCloudAuthPersonaMappingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: GitHubCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GitHubCloudAuthPersonaMappingResponse",
          ""
        ) as GitHubCloudAuthPersonaMappingResponse;
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
   * @params response Response returned by the server for a request to deleteAWSCloudAuthPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAWSCloudAuthPersonaMapping(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      return;
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
   * @params response Response returned by the server for a request to deleteGitHubCloudAuthIntakeMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteGitHubCloudAuthIntakeMapping(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      return;
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
   * @params response Response returned by the server for a request to deleteGitHubCloudAuthPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteGitHubCloudAuthPersonaMapping(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      return;
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
   * @params response Response returned by the server for a request to getAWSCloudAuthPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAWSCloudAuthPersonaMapping(
    response: ResponseContext
  ): Promise<AWSCloudAuthPersonaMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AWSCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AWSCloudAuthPersonaMappingResponse"
        ) as AWSCloudAuthPersonaMappingResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: AWSCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AWSCloudAuthPersonaMappingResponse",
          ""
        ) as AWSCloudAuthPersonaMappingResponse;
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
   * @params response Response returned by the server for a request to getGitHubCloudAuthIntakeMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGitHubCloudAuthIntakeMapping(
    response: ResponseContext
  ): Promise<GitHubCloudAuthIntakeMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GitHubCloudAuthIntakeMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GitHubCloudAuthIntakeMappingResponse"
        ) as GitHubCloudAuthIntakeMappingResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: GitHubCloudAuthIntakeMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GitHubCloudAuthIntakeMappingResponse",
          ""
        ) as GitHubCloudAuthIntakeMappingResponse;
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
   * @params response Response returned by the server for a request to getGitHubCloudAuthPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getGitHubCloudAuthPersonaMapping(
    response: ResponseContext
  ): Promise<GitHubCloudAuthPersonaMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GitHubCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GitHubCloudAuthPersonaMappingResponse"
        ) as GitHubCloudAuthPersonaMappingResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: GitHubCloudAuthPersonaMappingResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GitHubCloudAuthPersonaMappingResponse",
          ""
        ) as GitHubCloudAuthPersonaMappingResponse;
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
   * @params response Response returned by the server for a request to listAWSCloudAuthPersonaMappings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAWSCloudAuthPersonaMappings(
    response: ResponseContext
  ): Promise<AWSCloudAuthPersonaMappingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AWSCloudAuthPersonaMappingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AWSCloudAuthPersonaMappingsResponse"
        ) as AWSCloudAuthPersonaMappingsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: AWSCloudAuthPersonaMappingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "AWSCloudAuthPersonaMappingsResponse",
          ""
        ) as AWSCloudAuthPersonaMappingsResponse;
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
   * @params response Response returned by the server for a request to listGitHubCloudAuthIntakeMappings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGitHubCloudAuthIntakeMappings(
    response: ResponseContext
  ): Promise<GitHubCloudAuthIntakeMappingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GitHubCloudAuthIntakeMappingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GitHubCloudAuthIntakeMappingsResponse"
        ) as GitHubCloudAuthIntakeMappingsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: GitHubCloudAuthIntakeMappingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GitHubCloudAuthIntakeMappingsResponse",
          ""
        ) as GitHubCloudAuthIntakeMappingsResponse;
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
   * @params response Response returned by the server for a request to listGitHubCloudAuthPersonaMappings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGitHubCloudAuthPersonaMappings(
    response: ResponseContext
  ): Promise<GitHubCloudAuthPersonaMappingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: GitHubCloudAuthPersonaMappingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GitHubCloudAuthPersonaMappingsResponse"
        ) as GitHubCloudAuthPersonaMappingsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: JSONAPIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "JSONAPIErrorResponse"
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body
      );
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
      const body: GitHubCloudAuthPersonaMappingsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "GitHubCloudAuthPersonaMappingsResponse",
          ""
        ) as GitHubCloudAuthPersonaMappingsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface CloudAuthenticationApiCreateAWSCloudAuthPersonaMappingRequest {
  /**
   * @type AWSCloudAuthPersonaMappingCreateRequest
   */
  body: AWSCloudAuthPersonaMappingCreateRequest;
}

export interface CloudAuthenticationApiCreateGitHubCloudAuthIntakeMappingRequest {
  /**
   * @type GitHubCloudAuthIntakeMappingCreateRequest
   */
  body: GitHubCloudAuthIntakeMappingCreateRequest;
}

export interface CloudAuthenticationApiCreateGitHubCloudAuthPersonaMappingRequest {
  /**
   * @type GitHubCloudAuthPersonaMappingCreateRequest
   */
  body: GitHubCloudAuthPersonaMappingCreateRequest;
}

export interface CloudAuthenticationApiDeleteAWSCloudAuthPersonaMappingRequest {
  /**
   * The ID of the persona mapping
   * @type string
   */
  personaMappingId: string;
}

export interface CloudAuthenticationApiDeleteGitHubCloudAuthIntakeMappingRequest {
  /**
   * The ID of the intake mapping
   * @type string
   */
  intakeMappingId: string;
}

export interface CloudAuthenticationApiDeleteGitHubCloudAuthPersonaMappingRequest {
  /**
   * The ID of the persona mapping
   * @type string
   */
  personaMappingId: string;
}

export interface CloudAuthenticationApiGetAWSCloudAuthPersonaMappingRequest {
  /**
   * The ID of the persona mapping
   * @type string
   */
  personaMappingId: string;
}

export interface CloudAuthenticationApiGetGitHubCloudAuthIntakeMappingRequest {
  /**
   * The ID of the intake mapping
   * @type string
   */
  intakeMappingId: string;
}

export interface CloudAuthenticationApiGetGitHubCloudAuthPersonaMappingRequest {
  /**
   * The ID of the persona mapping
   * @type string
   */
  personaMappingId: string;
}

export class CloudAuthenticationApi {
  private requestFactory: CloudAuthenticationApiRequestFactory;
  private responseProcessor: CloudAuthenticationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: CloudAuthenticationApiRequestFactory,
    responseProcessor?: CloudAuthenticationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new CloudAuthenticationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new CloudAuthenticationApiResponseProcessor();
  }

  /**
   * Create an AWS cloud authentication persona mapping. This endpoint associates an AWS IAM principal with a Datadog user.
   * @param param The request object
   */
  public createAWSCloudAuthPersonaMapping(
    param: CloudAuthenticationApiCreateAWSCloudAuthPersonaMappingRequest,
    options?: Configuration
  ): Promise<AWSCloudAuthPersonaMappingResponse> {
    const requestContextPromise =
      this.requestFactory.createAWSCloudAuthPersonaMapping(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAWSCloudAuthPersonaMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Create a GitHub cloud authentication intake mapping. This endpoint entitles a matching GitHub Actions OIDC principal to request Datadog API keys.
   * @param param The request object
   */
  public createGitHubCloudAuthIntakeMapping(
    param: CloudAuthenticationApiCreateGitHubCloudAuthIntakeMappingRequest,
    options?: Configuration
  ): Promise<GitHubCloudAuthIntakeMappingResponse> {
    const requestContextPromise =
      this.requestFactory.createGitHubCloudAuthIntakeMapping(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createGitHubCloudAuthIntakeMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Create a GitHub cloud authentication persona mapping. This endpoint associates a GitHub Actions OIDC principal with a Datadog user. The mapped principal can request an impersonation token.
   * @param param The request object
   */
  public createGitHubCloudAuthPersonaMapping(
    param: CloudAuthenticationApiCreateGitHubCloudAuthPersonaMappingRequest,
    options?: Configuration
  ): Promise<GitHubCloudAuthPersonaMappingResponse> {
    const requestContextPromise =
      this.requestFactory.createGitHubCloudAuthPersonaMapping(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createGitHubCloudAuthPersonaMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Delete an AWS cloud authentication persona mapping by ID. This removes the association between an AWS IAM principal and a Datadog user.
   * @param param The request object
   */
  public deleteAWSCloudAuthPersonaMapping(
    param: CloudAuthenticationApiDeleteAWSCloudAuthPersonaMappingRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteAWSCloudAuthPersonaMapping(
        param.personaMappingId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAWSCloudAuthPersonaMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a GitHub cloud authentication intake mapping by ID. This removes a GitHub Actions OIDC principal's entitlement to request Datadog API keys.
   * @param param The request object
   */
  public deleteGitHubCloudAuthIntakeMapping(
    param: CloudAuthenticationApiDeleteGitHubCloudAuthIntakeMappingRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteGitHubCloudAuthIntakeMapping(
        param.intakeMappingId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteGitHubCloudAuthIntakeMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a GitHub cloud authentication persona mapping by ID. This removes the association between a GitHub Actions OIDC principal and a Datadog user.
   * @param param The request object
   */
  public deleteGitHubCloudAuthPersonaMapping(
    param: CloudAuthenticationApiDeleteGitHubCloudAuthPersonaMappingRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteGitHubCloudAuthPersonaMapping(
        param.personaMappingId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteGitHubCloudAuthPersonaMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Get a specific AWS cloud authentication persona mapping by ID. This endpoint retrieves a single configured persona mapping that associates an AWS IAM principal with a Datadog user.
   * @param param The request object
   */
  public getAWSCloudAuthPersonaMapping(
    param: CloudAuthenticationApiGetAWSCloudAuthPersonaMappingRequest,
    options?: Configuration
  ): Promise<AWSCloudAuthPersonaMappingResponse> {
    const requestContextPromise =
      this.requestFactory.getAWSCloudAuthPersonaMapping(
        param.personaMappingId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAWSCloudAuthPersonaMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Get a specific GitHub cloud authentication intake mapping by ID. This endpoint retrieves a single configured intake mapping that entitles a matching GitHub Actions OIDC principal to request Datadog API keys.
   * @param param The request object
   */
  public getGitHubCloudAuthIntakeMapping(
    param: CloudAuthenticationApiGetGitHubCloudAuthIntakeMappingRequest,
    options?: Configuration
  ): Promise<GitHubCloudAuthIntakeMappingResponse> {
    const requestContextPromise =
      this.requestFactory.getGitHubCloudAuthIntakeMapping(
        param.intakeMappingId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGitHubCloudAuthIntakeMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Get a specific GitHub cloud authentication persona mapping by ID. This endpoint retrieves a single configured persona mapping that associates a GitHub Actions OIDC principal with a Datadog user. The mapped principal can request an impersonation token.
   * @param param The request object
   */
  public getGitHubCloudAuthPersonaMapping(
    param: CloudAuthenticationApiGetGitHubCloudAuthPersonaMappingRequest,
    options?: Configuration
  ): Promise<GitHubCloudAuthPersonaMappingResponse> {
    const requestContextPromise =
      this.requestFactory.getGitHubCloudAuthPersonaMapping(
        param.personaMappingId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGitHubCloudAuthPersonaMapping(
            responseContext
          );
        });
    });
  }

  /**
   * List all AWS cloud authentication persona mappings. This endpoint retrieves all configured persona mappings that associate AWS IAM principals with Datadog users.
   * @param param The request object
   */
  public listAWSCloudAuthPersonaMappings(
    options?: Configuration
  ): Promise<AWSCloudAuthPersonaMappingsResponse> {
    const requestContextPromise =
      this.requestFactory.listAWSCloudAuthPersonaMappings(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAWSCloudAuthPersonaMappings(
            responseContext
          );
        });
    });
  }

  /**
   * List all GitHub cloud authentication intake mappings. This endpoint retrieves all configured intake mappings that entitle matching GitHub Actions OIDC principals to request Datadog API keys.
   * @param param The request object
   */
  public listGitHubCloudAuthIntakeMappings(
    options?: Configuration
  ): Promise<GitHubCloudAuthIntakeMappingsResponse> {
    const requestContextPromise =
      this.requestFactory.listGitHubCloudAuthIntakeMappings(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGitHubCloudAuthIntakeMappings(
            responseContext
          );
        });
    });
  }

  /**
   * List all GitHub cloud authentication persona mappings. This endpoint retrieves all configured persona mappings that associate GitHub Actions OpenID Connect (OIDC) principals with Datadog users. Mapped principals can request impersonation tokens.
   * @param param The request object
   */
  public listGitHubCloudAuthPersonaMappings(
    options?: Configuration
  ): Promise<GitHubCloudAuthPersonaMappingsResponse> {
    const requestContextPromise =
      this.requestFactory.listGitHubCloudAuthPersonaMappings(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGitHubCloudAuthPersonaMappings(
            responseContext
          );
        });
    });
  }
}
