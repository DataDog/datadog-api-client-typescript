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
import { AwsWifIntakeMappingCreateRequest } from "../models/AwsWifIntakeMappingCreateRequest";
import { AwsWifIntakeMappingResponse } from "../models/AwsWifIntakeMappingResponse";
import { AwsWifIntakeMappingsResponse } from "../models/AwsWifIntakeMappingsResponse";
import { AwsWifPersonaMappingCreateRequest } from "../models/AwsWifPersonaMappingCreateRequest";
import { AwsWifPersonaMappingResponse } from "../models/AwsWifPersonaMappingResponse";
import { AwsWifPersonaMappingsResponse } from "../models/AwsWifPersonaMappingsResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class AWSWIFApiRequestFactory extends BaseAPIRequestFactory {
  public async createAwsWifIntakeMapping(
    body: AwsWifIntakeMappingCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAwsWifIntakeMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/wif/aws/intake_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AWSWIFApi.createAwsWifIntakeMapping")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AwsWifIntakeMappingCreateRequest", ""),
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

  public async createAwsWifPersonaMapping(
    body: AwsWifPersonaMappingCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createAwsWifPersonaMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/wif/aws/persona_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AWSWIFApi.createAwsWifPersonaMapping")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AwsWifPersonaMappingCreateRequest", ""),
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

  public async deleteAwsWifIntakeMapping(
    configUuid: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'configUuid' is not null or undefined
    if (configUuid === null || configUuid === undefined) {
      throw new RequiredError("configUuid", "deleteAwsWifIntakeMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/wif/aws/intake_mapping/{config_uuid}".replace(
      "{config_uuid}",
      encodeURIComponent(String(configUuid))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AWSWIFApi.deleteAwsWifIntakeMapping")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async deleteAwsWifPersonaMapping(
    configUuid: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'configUuid' is not null or undefined
    if (configUuid === null || configUuid === undefined) {
      throw new RequiredError("configUuid", "deleteAwsWifPersonaMapping");
    }

    // Path Params
    const localVarPath =
      "/api/v2/wif/aws/persona_mapping/{config_uuid}".replace(
        "{config_uuid}",
        encodeURIComponent(String(configUuid))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AWSWIFApi.deleteAwsWifPersonaMapping")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getAwsWifIntakeMapping(
    configUuid: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'configUuid' is not null or undefined
    if (configUuid === null || configUuid === undefined) {
      throw new RequiredError("configUuid", "getAwsWifIntakeMapping");
    }

    // Path Params
    const localVarPath = "/api/v2/wif/aws/intake_mapping/{config_uuid}".replace(
      "{config_uuid}",
      encodeURIComponent(String(configUuid))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AWSWIFApi.getAwsWifIntakeMapping")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async getAwsWifPersonaMapping(
    configUuid: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'configUuid' is not null or undefined
    if (configUuid === null || configUuid === undefined) {
      throw new RequiredError("configUuid", "getAwsWifPersonaMapping");
    }

    // Path Params
    const localVarPath =
      "/api/v2/wif/aws/persona_mapping/{config_uuid}".replace(
        "{config_uuid}",
        encodeURIComponent(String(configUuid))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AWSWIFApi.getAwsWifPersonaMapping")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listAwsWifIntakeMappings(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/wif/aws/intake_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AWSWIFApi.listAwsWifIntakeMappings")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }

  public async listAwsWifPersonaMappings(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/wif/aws/persona_mapping";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.AWSWIFApi.listAwsWifPersonaMappings")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class AWSWIFApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAwsWifIntakeMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAwsWifIntakeMapping(
    response: ResponseContext
  ): Promise<AwsWifIntakeMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AwsWifIntakeMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsWifIntakeMappingResponse"
      ) as AwsWifIntakeMappingResponse;
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
      const body: AwsWifIntakeMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsWifIntakeMappingResponse",
        ""
      ) as AwsWifIntakeMappingResponse;
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
   * @params response Response returned by the server for a request to createAwsWifPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAwsWifPersonaMapping(
    response: ResponseContext
  ): Promise<AwsWifPersonaMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AwsWifPersonaMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsWifPersonaMappingResponse"
      ) as AwsWifPersonaMappingResponse;
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
      const body: AwsWifPersonaMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsWifPersonaMappingResponse",
        ""
      ) as AwsWifPersonaMappingResponse;
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
   * @params response Response returned by the server for a request to deleteAwsWifIntakeMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAwsWifIntakeMapping(
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
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
   * @params response Response returned by the server for a request to deleteAwsWifPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAwsWifPersonaMapping(
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
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
   * @params response Response returned by the server for a request to getAwsWifIntakeMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAwsWifIntakeMapping(
    response: ResponseContext
  ): Promise<AwsWifIntakeMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AwsWifIntakeMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsWifIntakeMappingResponse"
      ) as AwsWifIntakeMappingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: AwsWifIntakeMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsWifIntakeMappingResponse",
        ""
      ) as AwsWifIntakeMappingResponse;
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
   * @params response Response returned by the server for a request to getAwsWifPersonaMapping
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAwsWifPersonaMapping(
    response: ResponseContext
  ): Promise<AwsWifPersonaMappingResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AwsWifPersonaMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsWifPersonaMappingResponse"
      ) as AwsWifPersonaMappingResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 404
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
      const body: AwsWifPersonaMappingResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsWifPersonaMappingResponse",
        ""
      ) as AwsWifPersonaMappingResponse;
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
   * @params response Response returned by the server for a request to listAwsWifIntakeMappings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAwsWifIntakeMappings(
    response: ResponseContext
  ): Promise<AwsWifIntakeMappingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AwsWifIntakeMappingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsWifIntakeMappingsResponse"
      ) as AwsWifIntakeMappingsResponse;
      return body;
    }
    if (response.httpStatusCode === 403) {
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
      const body: AwsWifIntakeMappingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsWifIntakeMappingsResponse",
        ""
      ) as AwsWifIntakeMappingsResponse;
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
   * @params response Response returned by the server for a request to listAwsWifPersonaMappings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAwsWifPersonaMappings(
    response: ResponseContext
  ): Promise<AwsWifPersonaMappingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: AwsWifPersonaMappingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsWifPersonaMappingsResponse"
      ) as AwsWifPersonaMappingsResponse;
      return body;
    }
    if (response.httpStatusCode === 403) {
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
      const body: AwsWifPersonaMappingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AwsWifPersonaMappingsResponse",
        ""
      ) as AwsWifPersonaMappingsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface AWSWIFApiCreateAwsWifIntakeMappingRequest {
  /**
   * @type AwsWifIntakeMappingCreateRequest
   */
  body: AwsWifIntakeMappingCreateRequest;
}

export interface AWSWIFApiCreateAwsWifPersonaMappingRequest {
  /**
   * @type AwsWifPersonaMappingCreateRequest
   */
  body: AwsWifPersonaMappingCreateRequest;
}

export interface AWSWIFApiDeleteAwsWifIntakeMappingRequest {
  /**
   * The UUID of the WIF configuration to operate on.
   * @type string
   */
  configUuid: string;
}

export interface AWSWIFApiDeleteAwsWifPersonaMappingRequest {
  /**
   * The UUID of the WIF configuration to operate on.
   * @type string
   */
  configUuid: string;
}

export interface AWSWIFApiGetAwsWifIntakeMappingRequest {
  /**
   * The UUID of the WIF configuration to operate on.
   * @type string
   */
  configUuid: string;
}

export interface AWSWIFApiGetAwsWifPersonaMappingRequest {
  /**
   * The UUID of the WIF configuration to operate on.
   * @type string
   */
  configUuid: string;
}

export class AWSWIFApi {
  private requestFactory: AWSWIFApiRequestFactory;
  private responseProcessor: AWSWIFApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AWSWIFApiRequestFactory,
    responseProcessor?: AWSWIFApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new AWSWIFApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new AWSWIFApiResponseProcessor();
  }

  /**
   * Create an AWS WIF intake mapping. The mapping binds an IAM role ARN pattern to a managed-rotation API key, allowing AWS workloads to send telemetry to Datadog without requiring a delegated user token.
   * @param param The request object
   */
  public createAwsWifIntakeMapping(
    param: AWSWIFApiCreateAwsWifIntakeMappingRequest,
    options?: Configuration
  ): Promise<AwsWifIntakeMappingResponse> {
    const requestContextPromise = this.requestFactory.createAwsWifIntakeMapping(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAwsWifIntakeMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Create an AWS Workload Identity Federation (WIF) persona mapping. The mapping binds an IAM role ARN pattern to a Datadog user handle, which is used to authenticate delegated-token requests from that AWS identity.
   * @param param The request object
   */
  public createAwsWifPersonaMapping(
    param: AWSWIFApiCreateAwsWifPersonaMappingRequest,
    options?: Configuration
  ): Promise<AwsWifPersonaMappingResponse> {
    const requestContextPromise =
      this.requestFactory.createAwsWifPersonaMapping(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAwsWifPersonaMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Delete an AWS WIF intake mapping by UUID. The associated managed-rotation API key is left intact, but AWS workloads that previously matched this mapping will lose intake access.
   * @param param The request object
   */
  public deleteAwsWifIntakeMapping(
    param: AWSWIFApiDeleteAwsWifIntakeMappingRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteAwsWifIntakeMapping(
      param.configUuid,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAwsWifIntakeMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Delete an AWS WIF persona mapping by UUID. Subsequent delegated-token requests from the previously mapped AWS identity will be denied.
   * @param param The request object
   */
  public deleteAwsWifPersonaMapping(
    param: AWSWIFApiDeleteAwsWifPersonaMappingRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteAwsWifPersonaMapping(param.configUuid, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAwsWifPersonaMapping(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieve a single AWS WIF intake mapping by UUID.
   * @param param The request object
   */
  public getAwsWifIntakeMapping(
    param: AWSWIFApiGetAwsWifIntakeMappingRequest,
    options?: Configuration
  ): Promise<AwsWifIntakeMappingResponse> {
    const requestContextPromise = this.requestFactory.getAwsWifIntakeMapping(
      param.configUuid,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAwsWifIntakeMapping(responseContext);
        });
    });
  }

  /**
   * Retrieve a single AWS WIF persona mapping by UUID.
   * @param param The request object
   */
  public getAwsWifPersonaMapping(
    param: AWSWIFApiGetAwsWifPersonaMappingRequest,
    options?: Configuration
  ): Promise<AwsWifPersonaMappingResponse> {
    const requestContextPromise = this.requestFactory.getAwsWifPersonaMapping(
      param.configUuid,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAwsWifPersonaMapping(
            responseContext
          );
        });
    });
  }

  /**
   * List every AWS WIF intake mapping configured for the caller's organization.
   * @param param The request object
   */
  public listAwsWifIntakeMappings(
    options?: Configuration
  ): Promise<AwsWifIntakeMappingsResponse> {
    const requestContextPromise =
      this.requestFactory.listAwsWifIntakeMappings(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAwsWifIntakeMappings(
            responseContext
          );
        });
    });
  }

  /**
   * List every AWS WIF persona mapping configured for the caller's organization.
   * @param param The request object
   */
  public listAwsWifPersonaMappings(
    options?: Configuration
  ): Promise<AwsWifPersonaMappingsResponse> {
    const requestContextPromise =
      this.requestFactory.listAwsWifPersonaMappings(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAwsWifPersonaMappings(
            responseContext
          );
        });
    });
  }
}
