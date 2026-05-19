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
import { CaseTypeCreateRequest } from "./models/CaseTypeCreateRequest";
import { CaseTypeResponse } from "./models/CaseTypeResponse";
import { CaseTypesResponse } from "./models/CaseTypesResponse";
import { version } from "../version";

export class CaseManagementTypeApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("case-management-type", version);
    }
  }
  public async createCaseType(
    body: CaseTypeCreateRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createCaseType");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/types";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementTypeApi.v2.createCaseType",
      CaseManagementTypeApi.operationServers,
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
      serialize(body, TypingInfo, "CaseTypeCreateRequest", ""),
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

  public async deleteCaseType(
    caseTypeId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'caseTypeId' is not null or undefined
    if (caseTypeId === null || caseTypeId === undefined) {
      throw new RequiredError("caseTypeId", "deleteCaseType");
    }

    // Path Params
    const localVarPath = "/api/v2/cases/types/{case_type_id}".replace(
      "{case_type_id}",
      encodeURIComponent(String(caseTypeId)),
    );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementTypeApi.v2.deleteCaseType",
      CaseManagementTypeApi.operationServers,
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

  public async getAllCaseTypes(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/cases/types";

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "CaseManagementTypeApi.v2.getAllCaseTypes",
      CaseManagementTypeApi.operationServers,
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

export class CaseManagementTypeApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createCaseType
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createCaseType(
    response: ResponseContext,
  ): Promise<CaseTypeResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 201) {
      const body: CaseTypeResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseTypeResponse",
      ) as CaseTypeResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: CaseTypeResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseTypeResponse",
        "",
      ) as CaseTypeResponse;
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
   * @params response Response returned by the server for a request to deleteCaseType
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteCaseType(response: ResponseContext): Promise<void> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 204) {
      return;
    }
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
   * @params response Response returned by the server for a request to getAllCaseTypes
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAllCaseTypes(
    response: ResponseContext,
  ): Promise<CaseTypesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: CaseTypesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseTypesResponse",
      ) as CaseTypesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 401 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
    ) {
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
      const body: CaseTypesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "CaseTypesResponse",
        "",
      ) as CaseTypesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface CaseManagementTypeApiCreateCaseTypeRequest {
  /**
   * Case type payload
   * @type CaseTypeCreateRequest
   */
  body: CaseTypeCreateRequest;
}

export interface CaseManagementTypeApiDeleteCaseTypeRequest {
  /**
   * Case type's UUID
   * @type string
   */
  caseTypeId: string;
}

export class CaseManagementTypeApi {
  private requestFactory: CaseManagementTypeApiRequestFactory;
  private responseProcessor: CaseManagementTypeApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: CaseManagementTypeApiRequestFactory,
    responseProcessor?: CaseManagementTypeApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory ||
      new CaseManagementTypeApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new CaseManagementTypeApiResponseProcessor();
  }

  /**
   * Create a Case Type
   * @param param The request object
   */
  public createCaseType(
    param: CaseManagementTypeApiCreateCaseTypeRequest,
    options?: Configuration,
  ): Promise<CaseTypeResponse> {
    const requestContextPromise = this.requestFactory.createCaseType(
      param.body,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createCaseType(responseContext);
        });
    });
  }

  /**
   * Delete a case type
   * @param param The request object
   */
  public deleteCaseType(
    param: CaseManagementTypeApiDeleteCaseTypeRequest,
    options?: Configuration,
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteCaseType(
      param.caseTypeId,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteCaseType(responseContext);
        });
    });
  }

  /**
   * Get all case types
   * @param param The request object
   */
  public getAllCaseTypes(options?: Configuration): Promise<CaseTypesResponse> {
    const requestContextPromise = this.requestFactory.getAllCaseTypes(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAllCaseTypes(responseContext);
        });
    });
  }
}
