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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
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

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
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
}
