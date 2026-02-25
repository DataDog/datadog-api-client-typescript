import {
  ApiException,
  BaseAPIRequestFactory,
  BaseServerConfiguration,
  buildUserAgent,
  Configuration,
  createConfiguration,
  deserialize,
  getPreferredMediaType,
  HttpMethod,
  isBrowser,
  logger,
  normalizeMediaType,
  parse,
  RequiredError,
  RequestContext,
  ResponseContext,
  serialize,
  ServerConfiguration,
  stringify,
  applySecurityAuthentication,
} from "@datadog/datadog-api-client";

import { TypingInfo } from "./models/TypingInfo";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { AWSCloudAuthPersonaMappingCreateRequest } from "./models/AWSCloudAuthPersonaMappingCreateRequest";
import { AWSCloudAuthPersonaMappingResponse } from "./models/AWSCloudAuthPersonaMappingResponse";
import { AWSCloudAuthPersonaMappingsResponse } from "./models/AWSCloudAuthPersonaMappingsResponse";
import { JSONAPIErrorResponse } from "./models/JSONAPIErrorResponse";
import { version } from "../version";

export class CloudAuthenticationApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("cloud-authentication", version);
    }
  }
  public async createAWSCloudAuthPersonaMapping(
    body: AWSCloudAuthPersonaMappingCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CloudAuthenticationApi.v2.createAWSCloudAuthPersonaMapping"
      ]
    ) {
      throw new Error(
        "Unstable operation 'createAWSCloudAuthPersonaMapping' is disabled. Enable it by setting `configuration.unstableOperations['CloudAuthenticationApi.v2.createAWSCloudAuthPersonaMapping'] = true`",
      );
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAWSCloudAuthPersonaMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/cloud_auth/aws/persona_mapping";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudAuthenticationApi.v2.createAWSCloudAuthPersonaMapping",
      CloudAuthenticationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Body Params
    const contentType = getPreferredMediaType(["application/json"]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = stringify(
      serialize(
        body,
        TypingInfo,
        "AWSCloudAuthPersonaMappingCreateRequest",
        "",
      ),
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

  public async deleteAWSCloudAuthPersonaMapping(
    personaMappingId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CloudAuthenticationApi.v2.deleteAWSCloudAuthPersonaMapping"
      ]
    ) {
      throw new Error(
        "Unstable operation 'deleteAWSCloudAuthPersonaMapping' is disabled. Enable it by setting `configuration.unstableOperations['CloudAuthenticationApi.v2.deleteAWSCloudAuthPersonaMapping'] = true`",
      );
    }

    // verify required parameter 'personaMappingId' is not null or undefined
    if (personaMappingId === null || personaMappingId === undefined) {
      throw new RequiredError(
        "personaMappingId",
        "deleteAWSCloudAuthPersonaMapping",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/cloud_auth/aws/persona_mapping/{persona_mapping_id}".replace(
        "{persona_mapping_id}",
        encodeURIComponent(String(personaMappingId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudAuthenticationApi.v2.deleteAWSCloudAuthPersonaMapping",
      CloudAuthenticationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getAWSCloudAuthPersonaMapping(
    personaMappingId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CloudAuthenticationApi.v2.getAWSCloudAuthPersonaMapping"
      ]
    ) {
      throw new Error(
        "Unstable operation 'getAWSCloudAuthPersonaMapping' is disabled. Enable it by setting `configuration.unstableOperations['CloudAuthenticationApi.v2.getAWSCloudAuthPersonaMapping'] = true`",
      );
    }

    // verify required parameter 'personaMappingId' is not null or undefined
    if (personaMappingId === null || personaMappingId === undefined) {
      throw new RequiredError(
        "personaMappingId",
        "getAWSCloudAuthPersonaMapping",
      );
    }

    // Path Params
    const localVarPath =
      "/api/v2/cloud_auth/aws/persona_mapping/{persona_mapping_id}".replace(
        "{persona_mapping_id}",
        encodeURIComponent(String(personaMappingId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudAuthenticationApi.v2.getAWSCloudAuthPersonaMapping",
      CloudAuthenticationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listAWSCloudAuthPersonaMappings(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    if (
      !_config.unstableOperations[
        "CloudAuthenticationApi.v2.listAWSCloudAuthPersonaMappings"
      ]
    ) {
      throw new Error(
        "Unstable operation 'listAWSCloudAuthPersonaMappings' is disabled. Enable it by setting `configuration.unstableOperations['CloudAuthenticationApi.v2.listAWSCloudAuthPersonaMappings'] = true`",
      );
    }

    // Path Params
    const localVarPath = "/api/v2/cloud_auth/aws/persona_mapping";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CloudAuthenticationApi.v2.listAWSCloudAuthPersonaMappings",
      CloudAuthenticationApi.operationServers,
    );
    const requestContext = server.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
      overrides,
    );
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set User-Agent
    if (this.userAgent) {
      requestContext.setHeaderParam("User-Agent", this.userAgent);
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
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
    response: ResponseContext,
  ): Promise<AWSCloudAuthPersonaMappingResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: AWSCloudAuthPersonaMappingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AWSCloudAuthPersonaMappingResponse",
      ) as AWSCloudAuthPersonaMappingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 409
    ) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
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
      const body: AWSCloudAuthPersonaMappingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AWSCloudAuthPersonaMappingResponse",
        "",
      ) as AWSCloudAuthPersonaMappingResponse;
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
   * @params response Response returned by the server for a request to deleteAWSCloudAuthPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAWSCloudAuthPersonaMapping(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
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
      return;
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
   * @params response Response returned by the server for a request to getAWSCloudAuthPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAWSCloudAuthPersonaMapping(
    response: ResponseContext,
  ): Promise<AWSCloudAuthPersonaMappingResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AWSCloudAuthPersonaMappingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AWSCloudAuthPersonaMappingResponse",
      ) as AWSCloudAuthPersonaMappingResponse;
      return body;
    }
    if (response.httpStatusCode === 403 || response.httpStatusCode === 404) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
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
      const body: AWSCloudAuthPersonaMappingResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AWSCloudAuthPersonaMappingResponse",
        "",
      ) as AWSCloudAuthPersonaMappingResponse;
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
   * @params response Response returned by the server for a request to listAWSCloudAuthPersonaMappings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAWSCloudAuthPersonaMappings(
    response: ResponseContext,
  ): Promise<AWSCloudAuthPersonaMappingsResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AWSCloudAuthPersonaMappingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AWSCloudAuthPersonaMappingsResponse",
      ) as AWSCloudAuthPersonaMappingsResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 403) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: JSONAPIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
          "JSONAPIErrorResponse",
        ) as JSONAPIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<JSONAPIErrorResponse>(
          response.httpStatusCode,
          bodyText,
        );
      }
      throw new ApiException<JSONAPIErrorResponse>(
        response.httpStatusCode,
        body,
      );
    }
    if (response.httpStatusCode === 429) {
      const bodyText = parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = deserialize(
          bodyText,
          TypingInfo,
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
      const body: AWSCloudAuthPersonaMappingsResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AWSCloudAuthPersonaMappingsResponse",
        "",
      ) as AWSCloudAuthPersonaMappingsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface CloudAuthenticationApiCreateAWSCloudAuthPersonaMappingRequest {
  /**
   * @type AWSCloudAuthPersonaMappingCreateRequest
   */
  body: AWSCloudAuthPersonaMappingCreateRequest;
}

export interface CloudAuthenticationApiDeleteAWSCloudAuthPersonaMappingRequest {
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

export class CloudAuthenticationApi {
  private requestFactory: CloudAuthenticationApiRequestFactory;
  private responseProcessor: CloudAuthenticationApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: CloudAuthenticationApiRequestFactory,
    responseProcessor?: CloudAuthenticationApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new CloudAuthenticationApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CloudAuthenticationApiResponseProcessor();
  }

  /**
   * Create an AWS cloud authentication persona mapping. This endpoint associates an AWS IAM principal with a Datadog user.
   * @param param The request object
   */
  public createAWSCloudAuthPersonaMapping(
    param: CloudAuthenticationApiCreateAWSCloudAuthPersonaMappingRequest,
    options?: Configuration,
  ): Promise<AWSCloudAuthPersonaMappingResponse> {
    const requestContextPromise =
      this.requestFactory.createAWSCloudAuthPersonaMapping(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAWSCloudAuthPersonaMapping(
            responseContext,
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
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteAWSCloudAuthPersonaMapping(
        param.personaMappingId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAWSCloudAuthPersonaMapping(
            responseContext,
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
    options?: Configuration,
  ): Promise<AWSCloudAuthPersonaMappingResponse> {
    const requestContextPromise =
      this.requestFactory.getAWSCloudAuthPersonaMapping(
        param.personaMappingId,
        options,
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAWSCloudAuthPersonaMapping(
            responseContext,
          );
        });
    });
  }

  /**
   * List all AWS cloud authentication persona mappings. This endpoint retrieves all configured persona mappings that associate AWS IAM principals with Datadog users.
   * @param param The request object
   */
  public listAWSCloudAuthPersonaMappings(
    options?: Configuration,
  ): Promise<AWSCloudAuthPersonaMappingsResponse> {
    const requestContextPromise =
      this.requestFactory.listAWSCloudAuthPersonaMappings(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAWSCloudAuthPersonaMappings(
            responseContext,
          );
        });
    });
  }
}
