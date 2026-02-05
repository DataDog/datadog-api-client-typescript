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
import { AssignSeatsUserRequest } from "../models/AssignSeatsUserRequest";
import { AssignSeatsUserResponse } from "../models/AssignSeatsUserResponse";
import { SeatUserDataArray } from "../models/SeatUserDataArray";
import { UnassignSeatsUserRequest } from "../models/UnassignSeatsUserRequest";

export class SeatsApiRequestFactory extends BaseAPIRequestFactory {
  public async assignSeatsUserV2(
    body: AssignSeatsUserRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "assignSeatsUserV2");
    }

    // Path Params
    const localVarPath = "/api/v2/seats/users";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SeatsApi.assignSeatsUserV2")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "AssignSeatsUserRequest", ""),
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

  public async getSeatsUsersV2(
    productCode: string,
    pageLimit?: number,
    pageCursor?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'productCode' is not null or undefined
    if (productCode === null || productCode === undefined) {
      throw new RequiredError("productCode", "getSeatsUsersV2");
    }

    // Path Params
    const localVarPath = "/api/v2/seats/users";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SeatsApi.getSeatsUsersV2")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (productCode !== undefined) {
      requestContext.setQueryParam(
        "product_code",
        ObjectSerializer.serialize(productCode, "string", ""),
        ""
      );
    }
    if (pageLimit !== undefined) {
      requestContext.setQueryParam(
        "page[limit]",
        ObjectSerializer.serialize(pageLimit, "number", ""),
        ""
      );
    }
    if (pageCursor !== undefined) {
      requestContext.setQueryParam(
        "page[cursor]",
        ObjectSerializer.serialize(pageCursor, "string", ""),
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

  public async unassignSeatsUserV2(
    body: UnassignSeatsUserRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "unassignSeatsUserV2");
    }

    // Path Params
    const localVarPath = "/api/v2/seats/users";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.SeatsApi.unassignSeatsUserV2")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "UnassignSeatsUserRequest", ""),
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

export class SeatsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to assignSeatsUserV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async assignSeatsUserV2(
    response: ResponseContext
  ): Promise<AssignSeatsUserResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 201) {
      const body: AssignSeatsUserResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AssignSeatsUserResponse"
      ) as AssignSeatsUserResponse;
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
      const body: AssignSeatsUserResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AssignSeatsUserResponse",
        ""
      ) as AssignSeatsUserResponse;
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
   * @params response Response returned by the server for a request to getSeatsUsersV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getSeatsUsersV2(
    response: ResponseContext
  ): Promise<SeatUserDataArray> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: SeatUserDataArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SeatUserDataArray"
      ) as SeatUserDataArray;
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
      const body: SeatUserDataArray = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SeatUserDataArray",
        ""
      ) as SeatUserDataArray;
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
   * @params response Response returned by the server for a request to unassignSeatsUserV2
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async unassignSeatsUserV2(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 204) {
      return;
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
}

export interface SeatsApiAssignSeatsUserV2Request {
  /**
   * @type AssignSeatsUserRequest
   */
  body: AssignSeatsUserRequest;
}

export interface SeatsApiGetSeatsUsersV2Request {
  /**
   * The product code for which to retrieve seat users.
   * @type string
   */
  productCode: string;
  /**
   * Maximum number of results to return.
   * @type number
   */
  pageLimit?: number;
  /**
   * Cursor for pagination.
   * @type string
   */
  pageCursor?: string;
}

export interface SeatsApiUnassignSeatsUserV2Request {
  /**
   * @type UnassignSeatsUserRequest
   */
  body: UnassignSeatsUserRequest;
}

export class SeatsApi {
  private requestFactory: SeatsApiRequestFactory;
  private responseProcessor: SeatsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: SeatsApiRequestFactory,
    responseProcessor?: SeatsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new SeatsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new SeatsApiResponseProcessor();
  }

  /**
   * Assign seats to users for a product code.
   * @param param The request object
   */
  public assignSeatsUserV2(
    param: SeatsApiAssignSeatsUserV2Request,
    options?: Configuration
  ): Promise<AssignSeatsUserResponse> {
    const requestContextPromise = this.requestFactory.assignSeatsUserV2(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.assignSeatsUserV2(responseContext);
        });
    });
  }

  /**
   * Get the list of seats users assigned to a product code.
   * @param param The request object
   */
  public getSeatsUsersV2(
    param: SeatsApiGetSeatsUsersV2Request,
    options?: Configuration
  ): Promise<SeatUserDataArray> {
    const requestContextPromise = this.requestFactory.getSeatsUsersV2(
      param.productCode,
      param.pageLimit,
      param.pageCursor,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSeatsUsersV2(responseContext);
        });
    });
  }

  /**
   * Unassign seats from users for a product code.
   * @param param The request object
   */
  public unassignSeatsUserV2(
    param: SeatsApiUnassignSeatsUserV2Request,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.unassignSeatsUserV2(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unassignSeatsUserV2(responseContext);
        });
    });
  }
}
