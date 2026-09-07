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
import { DemBatchGetJourneysRequest } from "../models/DemBatchGetJourneysRequest";
import { DemCreateJourneyTestSuiteRequest } from "../models/DemCreateJourneyTestSuiteRequest";
import { DemInferredJourneyStatus } from "../models/DemInferredJourneyStatus";
import { DemJourneyCreateRequest } from "../models/DemJourneyCreateRequest";
import { DemJourneyResponse } from "../models/DemJourneyResponse";
import { DemJourneysListResponse } from "../models/DemJourneysListResponse";
import { DemJourneyTestSuiteResponse } from "../models/DemJourneyTestSuiteResponse";
import { DemRecommendedTestsResponse } from "../models/DemRecommendedTestsResponse";
import { DemSearchInferredJourneysResponse } from "../models/DemSearchInferredJourneysResponse";
import { DemVariantRequest } from "../models/DemVariantRequest";
import { DemVariantResponse } from "../models/DemVariantResponse";
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";

export class DEMApiRequestFactory extends BaseAPIRequestFactory {
  public async batchGetJourneysByTestSuiteIDs(
    body: DemBatchGetJourneysRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "batchGetJourneysByTestSuiteIDs");
    }

    // Path Params
    const localVarPath = "/api/v2/dem/journeys/suites/batch";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DEMApi.batchGetJourneysByTestSuiteIDs")
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
      ObjectSerializer.serialize(body, "DemBatchGetJourneysRequest", ""),
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

  public async createJourney(
    body: DemJourneyCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createJourney");
    }

    // Path Params
    const localVarPath = "/api/v2/dem/journeys";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DEMApi.createJourney")
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
      ObjectSerializer.serialize(body, "DemJourneyCreateRequest", ""),
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

  public async createJourneyVariant(
    journeyId: string,
    body: DemVariantRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'journeyId' is not null or undefined
    if (journeyId === null || journeyId === undefined) {
      throw new RequiredError("journeyId", "createJourneyVariant");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createJourneyVariant");
    }

    // Path Params
    const localVarPath = "/api/v2/dem/journeys/{journey_id}/variants".replace(
      "{journey_id}",
      encodeURIComponent(String(journeyId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DEMApi.createJourneyVariant")
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
      ObjectSerializer.serialize(body, "DemVariantRequest", ""),
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

  public async createTestSuiteForJourney(
    publicJourneyId: string,
    body: DemCreateJourneyTestSuiteRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'publicJourneyId' is not null or undefined
    if (publicJourneyId === null || publicJourneyId === undefined) {
      throw new RequiredError("publicJourneyId", "createTestSuiteForJourney");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTestSuiteForJourney");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dem/journeys/{public_journey_id}/suite".replace(
        "{public_journey_id}",
        encodeURIComponent(String(publicJourneyId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DEMApi.createTestSuiteForJourney")
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
      ObjectSerializer.serialize(body, "DemCreateJourneyTestSuiteRequest", ""),
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

  public async deleteIgnoredInferredJourney(
    journeyId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'journeyId' is not null or undefined
    if (journeyId === null || journeyId === undefined) {
      throw new RequiredError("journeyId", "deleteIgnoredInferredJourney");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dem/journeys/inferred/ignored/{journey_id}".replace(
        "{journey_id}",
        encodeURIComponent(String(journeyId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DEMApi.deleteIgnoredInferredJourney")
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
    ]);

    return requestContext;
  }

  public async deleteJourney(
    journeyId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'journeyId' is not null or undefined
    if (journeyId === null || journeyId === undefined) {
      throw new RequiredError("journeyId", "deleteJourney");
    }

    // Path Params
    const localVarPath = "/api/v2/dem/journeys/{journey_id}".replace(
      "{journey_id}",
      encodeURIComponent(String(journeyId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DEMApi.deleteJourney")
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
    ]);

    return requestContext;
  }

  public async deleteJourneyVariant(
    variantId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'variantId' is not null or undefined
    if (variantId === null || variantId === undefined) {
      throw new RequiredError("variantId", "deleteJourneyVariant");
    }

    // Path Params
    const localVarPath = "/api/v2/dem/journeys/variants/{variant_id}".replace(
      "{variant_id}",
      encodeURIComponent(String(variantId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DEMApi.deleteJourneyVariant")
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
    ]);

    return requestContext;
  }

  public async getJourney(
    journeyId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'journeyId' is not null or undefined
    if (journeyId === null || journeyId === undefined) {
      throw new RequiredError("journeyId", "getJourney");
    }

    // Path Params
    const localVarPath = "/api/v2/dem/journeys/{journey_id}".replace(
      "{journey_id}",
      encodeURIComponent(String(journeyId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DEMApi.getJourney")
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
    ]);

    return requestContext;
  }

  public async getJourneyRecommendedTests(
    journeyId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'journeyId' is not null or undefined
    if (journeyId === null || journeyId === undefined) {
      throw new RequiredError("journeyId", "getJourneyRecommendedTests");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dem/journeys/{journey_id}/recommended-tests".replace(
        "{journey_id}",
        encodeURIComponent(String(journeyId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DEMApi.getJourneyRecommendedTests")
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
    ]);

    return requestContext;
  }

  public async ignoreInferredJourney(
    journeyId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'journeyId' is not null or undefined
    if (journeyId === null || journeyId === undefined) {
      throw new RequiredError("journeyId", "ignoreInferredJourney");
    }

    // Path Params
    const localVarPath =
      "/api/v2/dem/journeys/inferred/{journey_id}/ignore".replace(
        "{journey_id}",
        encodeURIComponent(String(journeyId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DEMApi.ignoreInferredJourney")
      .makeRequestContext(localVarPath, HttpMethod.POST);
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
    ]);

    return requestContext;
  }

  public async searchInferredJourneys(
    status?: DemInferredJourneyStatus,
    q?: string,
    appId?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/dem/journeys/inferred/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DEMApi.searchInferredJourneys")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (status !== undefined) {
      requestContext.setQueryParam(
        "status",
        ObjectSerializer.serialize(status, "DemInferredJourneyStatus", ""),
        ""
      );
    }
    if (q !== undefined) {
      requestContext.setQueryParam(
        "q",
        ObjectSerializer.serialize(q, "string", ""),
        ""
      );
    }
    if (appId !== undefined) {
      requestContext.setQueryParam(
        "app_id",
        ObjectSerializer.serialize(appId, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async searchJourneys(
    query?: string,
    pageOffset?: number,
    pageLimit?: number,
    creator?: string,
    team?: string,
    appId?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/dem/journeys/search";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DEMApi.searchJourneys")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        ObjectSerializer.serialize(query, "string", ""),
        ""
      );
    }
    if (pageOffset !== undefined) {
      requestContext.setQueryParam(
        "page[offset]",
        ObjectSerializer.serialize(pageOffset, "number", "int64"),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", "int64"),
        ""
      );
    }
    if (creator !== undefined) {
      requestContext.setQueryParam(
        "creator",
        ObjectSerializer.serialize(creator, "string", ""),
        ""
      );
    }
    if (team !== undefined) {
      requestContext.setQueryParam(
        "team",
        ObjectSerializer.serialize(team, "string", ""),
        ""
      );
    }
    if (appId !== undefined) {
      requestContext.setQueryParam(
        "app_id",
        ObjectSerializer.serialize(appId, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateJourney(
    journeyId: string,
    body: DemJourneyCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'journeyId' is not null or undefined
    if (journeyId === null || journeyId === undefined) {
      throw new RequiredError("journeyId", "updateJourney");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateJourney");
    }

    // Path Params
    const localVarPath = "/api/v2/dem/journeys/{journey_id}".replace(
      "{journey_id}",
      encodeURIComponent(String(journeyId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DEMApi.updateJourney")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
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
      ObjectSerializer.serialize(body, "DemJourneyCreateRequest", ""),
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

  public async updateJourneyVariant(
    variantId: string,
    body: DemVariantRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'variantId' is not null or undefined
    if (variantId === null || variantId === undefined) {
      throw new RequiredError("variantId", "updateJourneyVariant");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateJourneyVariant");
    }

    // Path Params
    const localVarPath = "/api/v2/dem/journeys/variants/{variant_id}".replace(
      "{variant_id}",
      encodeURIComponent(String(variantId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DEMApi.updateJourneyVariant")
      .makeRequestContext(localVarPath, HttpMethod.PUT);
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
      ObjectSerializer.serialize(body, "DemVariantRequest", ""),
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
}

export class DEMApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to batchGetJourneysByTestSuiteIDs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async batchGetJourneysByTestSuiteIDs(
    response: ResponseContext
  ): Promise<DemJourneysListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DemJourneysListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DemJourneysListResponse"
      ) as DemJourneysListResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: DemJourneysListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DemJourneysListResponse",
        ""
      ) as DemJourneysListResponse;
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
   * @params response Response returned by the server for a request to createJourney
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createJourney(
    response: ResponseContext
  ): Promise<DemJourneyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DemJourneyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DemJourneyResponse"
      ) as DemJourneyResponse;
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
      const body: DemJourneyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DemJourneyResponse",
        ""
      ) as DemJourneyResponse;
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
   * @params response Response returned by the server for a request to createJourneyVariant
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createJourneyVariant(
    response: ResponseContext
  ): Promise<DemVariantResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DemVariantResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DemVariantResponse"
      ) as DemVariantResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: DemVariantResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DemVariantResponse",
        ""
      ) as DemVariantResponse;
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
   * @params response Response returned by the server for a request to createTestSuiteForJourney
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTestSuiteForJourney(
    response: ResponseContext
  ): Promise<DemJourneyTestSuiteResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: DemJourneyTestSuiteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DemJourneyTestSuiteResponse"
      ) as DemJourneyTestSuiteResponse;
      return body;
    }
    if (response.httpStatusCode === 404) {
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
      const body: DemJourneyTestSuiteResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DemJourneyTestSuiteResponse",
        ""
      ) as DemJourneyTestSuiteResponse;
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
   * @params response Response returned by the server for a request to deleteIgnoredInferredJourney
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteIgnoredInferredJourney(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 404) {
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
   * @params response Response returned by the server for a request to deleteJourney
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteJourney(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 404) {
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
   * @params response Response returned by the server for a request to deleteJourneyVariant
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteJourneyVariant(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 404) {
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
   * @params response Response returned by the server for a request to getJourney
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getJourney(
    response: ResponseContext
  ): Promise<DemJourneyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DemJourneyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DemJourneyResponse"
      ) as DemJourneyResponse;
      return body;
    }
    if (response.httpStatusCode === 404) {
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
      const body: DemJourneyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DemJourneyResponse",
        ""
      ) as DemJourneyResponse;
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
   * @params response Response returned by the server for a request to getJourneyRecommendedTests
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getJourneyRecommendedTests(
    response: ResponseContext
  ): Promise<DemRecommendedTestsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DemRecommendedTestsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DemRecommendedTestsResponse"
      ) as DemRecommendedTestsResponse;
      return body;
    }
    if (response.httpStatusCode === 404) {
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
      const body: DemRecommendedTestsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DemRecommendedTestsResponse",
        ""
      ) as DemRecommendedTestsResponse;
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
   * @params response Response returned by the server for a request to ignoreInferredJourney
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async ignoreInferredJourney(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
    }
    if (response.httpStatusCode === 404) {
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
   * @params response Response returned by the server for a request to searchInferredJourneys
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchInferredJourneys(
    response: ResponseContext
  ): Promise<DemSearchInferredJourneysResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DemSearchInferredJourneysResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DemSearchInferredJourneysResponse"
        ) as DemSearchInferredJourneysResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: DemSearchInferredJourneysResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DemSearchInferredJourneysResponse",
          ""
        ) as DemSearchInferredJourneysResponse;
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
   * @params response Response returned by the server for a request to searchJourneys
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async searchJourneys(
    response: ResponseContext
  ): Promise<DemJourneysListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DemJourneysListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DemJourneysListResponse"
      ) as DemJourneysListResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: DemJourneysListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DemJourneysListResponse",
        ""
      ) as DemJourneysListResponse;
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
   * @params response Response returned by the server for a request to updateJourney
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateJourney(
    response: ResponseContext
  ): Promise<DemJourneyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DemJourneyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DemJourneyResponse"
      ) as DemJourneyResponse;
      return body;
    }
    if (response.httpStatusCode === 404) {
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
      const body: DemJourneyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DemJourneyResponse",
        ""
      ) as DemJourneyResponse;
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
   * @params response Response returned by the server for a request to updateJourneyVariant
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateJourneyVariant(
    response: ResponseContext
  ): Promise<DemVariantResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: DemVariantResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DemVariantResponse"
      ) as DemVariantResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 404) {
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
      const body: DemVariantResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DemVariantResponse",
        ""
      ) as DemVariantResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface DEMApiBatchGetJourneysByTestSuiteIDsRequest {
  /**
   * @type DemBatchGetJourneysRequest
   */
  body: DemBatchGetJourneysRequest;
}

export interface DEMApiCreateJourneyRequest {
  /**
   * @type DemJourneyCreateRequest
   */
  body: DemJourneyCreateRequest;
}

export interface DEMApiCreateJourneyVariantRequest {
  /**
   * The unique identifier of the journey that owns the variant.
   * @type string
   */
  journeyId: string;
  /**
   * @type DemVariantRequest
   */
  body: DemVariantRequest;
}

export interface DEMApiCreateTestSuiteForJourneyRequest {
  /**
   * The public identifier of the DEM journey for which to create a test suite.
   * @type string
   */
  publicJourneyId: string;
  /**
   * @type DemCreateJourneyTestSuiteRequest
   */
  body: DemCreateJourneyTestSuiteRequest;
}

export interface DEMApiDeleteIgnoredInferredJourneyRequest {
  /**
   * The unique identifier of the ignored inferred journey to delete.
   * @type string
   */
  journeyId: string;
}

export interface DEMApiDeleteJourneyRequest {
  /**
   * The unique identifier of the DEM journey to delete.
   * @type string
   */
  journeyId: string;
}

export interface DEMApiDeleteJourneyVariantRequest {
  /**
   * The unique identifier of the variant to delete.
   * @type string
   */
  variantId: string;
}

export interface DEMApiGetJourneyRequest {
  /**
   * The unique identifier of the DEM journey.
   * @type string
   */
  journeyId: string;
}

export interface DEMApiGetJourneyRecommendedTestsRequest {
  /**
   * The unique identifier of the journey.
   * @type string
   */
  journeyId: string;
}

export interface DEMApiIgnoreInferredJourneyRequest {
  /**
   * The unique identifier of the inferred journey to ignore.
   * @type string
   */
  journeyId: string;
}

export interface DEMApiSearchInferredJourneysRequest {
  /**
   * Filter by inferred journey status. Use `candidate` (default) to retrieve journeys suggested for promotion, or `ignored` to retrieve journeys that have been dismissed.
   * @type DemInferredJourneyStatus
   */
  status?: DemInferredJourneyStatus;
  /**
   * Fuzzy search query to filter inferred journeys by name.
   * @type string
   */
  q?: string;
  /**
   * Filter inferred journeys by application ID.
   * @type string
   */
  appId?: string;
}

export interface DEMApiSearchJourneysRequest {
  /**
   * A search query string to filter journeys by name.
   * @type string
   */
  query?: string;
  /**
   * The offset for pagination.
   * @type number
   */
  pageOffset?: number;
  /**
   * The maximum number of results to return.
   * @type number
   */
  pageLimit?: number;
  /**
   * Filter journeys by creator handle.
   * @type string
   */
  creator?: string;
  /**
   * Filter journeys by team tag.
   * @type string
   */
  team?: string;
  /**
   * Filter journeys by application ID.
   * @type string
   */
  appId?: string;
}

export interface DEMApiUpdateJourneyRequest {
  /**
   * The unique identifier of the DEM journey to update.
   * @type string
   */
  journeyId: string;
  /**
   * @type DemJourneyCreateRequest
   */
  body: DemJourneyCreateRequest;
}

export interface DEMApiUpdateJourneyVariantRequest {
  /**
   * The unique identifier of the variant to update.
   * @type string
   */
  variantId: string;
  /**
   * @type DemVariantRequest
   */
  body: DemVariantRequest;
}

export class DEMApi {
  private requestFactory: DEMApiRequestFactory;
  private responseProcessor: DEMApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DEMApiRequestFactory,
    responseProcessor?: DEMApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new DEMApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new DEMApiResponseProcessor();
  }

  /**
   * Return DEM journeys associated with multiple given test suite IDs.
   * @param param The request object
   */
  public batchGetJourneysByTestSuiteIDs(
    param: DEMApiBatchGetJourneysByTestSuiteIDsRequest,
    options?: Configuration
  ): Promise<DemJourneysListResponse> {
    const requestContextPromise =
      this.requestFactory.batchGetJourneysByTestSuiteIDs(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.batchGetJourneysByTestSuiteIDs(
            responseContext
          );
        });
    });
  }

  /**
   * Create a DEM journey.
   * @param param The request object
   */
  public createJourney(
    param: DEMApiCreateJourneyRequest,
    options?: Configuration
  ): Promise<DemJourneyResponse> {
    const requestContextPromise = this.requestFactory.createJourney(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createJourney(responseContext);
        });
    });
  }

  /**
   * Create a variant for a DEM journey.
   * @param param The request object
   */
  public createJourneyVariant(
    param: DEMApiCreateJourneyVariantRequest,
    options?: Configuration
  ): Promise<DemVariantResponse> {
    const requestContextPromise = this.requestFactory.createJourneyVariant(
      param.journeyId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createJourneyVariant(responseContext);
        });
    });
  }

  /**
   * Trigger test suite creation for a given DEM journey.
   * @param param The request object
   */
  public createTestSuiteForJourney(
    param: DEMApiCreateTestSuiteForJourneyRequest,
    options?: Configuration
  ): Promise<DemJourneyTestSuiteResponse> {
    const requestContextPromise = this.requestFactory.createTestSuiteForJourney(
      param.publicJourneyId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTestSuiteForJourney(
            responseContext
          );
        });
    });
  }

  /**
   * Remove an ignored inferred DEM journey, making it eligible to appear as a candidate again.
   * @param param The request object
   */
  public deleteIgnoredInferredJourney(
    param: DEMApiDeleteIgnoredInferredJourneyRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteIgnoredInferredJourney(
        param.journeyId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteIgnoredInferredJourney(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a DEM journey by its ID.
   * @param param The request object
   */
  public deleteJourney(
    param: DEMApiDeleteJourneyRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteJourney(
      param.journeyId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteJourney(responseContext);
        });
    });
  }

  /**
   * Delete a variant from a DEM journey.
   * @param param The request object
   */
  public deleteJourneyVariant(
    param: DEMApiDeleteJourneyVariantRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteJourneyVariant(
      param.variantId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteJourneyVariant(responseContext);
        });
    });
  }

  /**
   * Retrieve a single DEM journey by its ID.
   * @param param The request object
   */
  public getJourney(
    param: DEMApiGetJourneyRequest,
    options?: Configuration
  ): Promise<DemJourneyResponse> {
    const requestContextPromise = this.requestFactory.getJourney(
      param.journeyId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getJourney(responseContext);
        });
    });
  }

  /**
   * Retrieve AI-recommended synthetic tests for a DEM journey. Returns an empty list when no recommendation is available.
   * @param param The request object
   */
  public getJourneyRecommendedTests(
    param: DEMApiGetJourneyRecommendedTestsRequest,
    options?: Configuration
  ): Promise<DemRecommendedTestsResponse> {
    const requestContextPromise =
      this.requestFactory.getJourneyRecommendedTests(param.journeyId, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getJourneyRecommendedTests(
            responseContext
          );
        });
    });
  }

  /**
   * Mark an inferred DEM journey as ignored so it no longer appears in the candidate list.
   * @param param The request object
   */
  public ignoreInferredJourney(
    param: DEMApiIgnoreInferredJourneyRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.ignoreInferredJourney(
      param.journeyId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.ignoreInferredJourney(responseContext);
        });
    });
  }

  /**
   * Search for inferred DEM journeys by status. Returns candidates (status=candidate, the default) or ignored journeys (status=ignored). Supports optional fuzzy name filtering and app ID filtering.
   * @param param The request object
   */
  public searchInferredJourneys(
    param: DEMApiSearchInferredJourneysRequest = {},
    options?: Configuration
  ): Promise<DemSearchInferredJourneysResponse> {
    const requestContextPromise = this.requestFactory.searchInferredJourneys(
      param.status,
      param.q,
      param.appId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchInferredJourneys(responseContext);
        });
    });
  }

  /**
   * Search for DEM journeys with optional filtering by query, creator, team, and app.
   * @param param The request object
   */
  public searchJourneys(
    param: DEMApiSearchJourneysRequest = {},
    options?: Configuration
  ): Promise<DemJourneysListResponse> {
    const requestContextPromise = this.requestFactory.searchJourneys(
      param.query,
      param.pageOffset,
      param.pageLimit,
      param.creator,
      param.team,
      param.appId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchJourneys(responseContext);
        });
    });
  }

  /**
   * Update an existing DEM journey by its ID.
   * @param param The request object
   */
  public updateJourney(
    param: DEMApiUpdateJourneyRequest,
    options?: Configuration
  ): Promise<DemJourneyResponse> {
    const requestContextPromise = this.requestFactory.updateJourney(
      param.journeyId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateJourney(responseContext);
        });
    });
  }

  /**
   * Update an existing variant of a DEM journey.
   * @param param The request object
   */
  public updateJourneyVariant(
    param: DEMApiUpdateJourneyVariantRequest,
    options?: Configuration
  ): Promise<DemVariantResponse> {
    const requestContextPromise = this.requestFactory.updateJourneyVariant(
      param.variantId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateJourneyVariant(responseContext);
        });
    });
  }
}
