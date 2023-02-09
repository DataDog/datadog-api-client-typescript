import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  getServer,
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
import { GetRestrictionPolicyResponse } from "../models/GetRestrictionPolicyResponse";

export class RestrictionPoliciesApiRequestFactory extends BaseAPIRequestFactory {
  public async getRestrictionPolicy(
    resourceId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'resourceId' is not null or undefined
    if (resourceId === null || resourceId === undefined) {
      throw new RequiredError("resourceId", "getRestrictionPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/restriction_policy/{resource_id}".replace(
      "{resource_id}",
      encodeURIComponent(String(resourceId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.RestrictionPoliciesApi.getRestrictionPolicy"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
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
}

export class RestrictionPoliciesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getRestrictionPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRestrictionPolicy(
    response: ResponseContext
  ): Promise<GetRestrictionPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: GetRestrictionPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetRestrictionPolicyResponse"
      ) as GetRestrictionPolicyResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 429
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
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: GetRestrictionPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "GetRestrictionPolicyResponse",
        ""
      ) as GetRestrictionPolicyResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface RestrictionPoliciesApiGetRestrictionPolicyRequest {
  /**
   * Identifier, formatted as `type:id`.
   * @type string
   */
  resourceId: string;
}

export class RestrictionPoliciesApi {
  private requestFactory: RestrictionPoliciesApiRequestFactory;
  private responseProcessor: RestrictionPoliciesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: RestrictionPoliciesApiRequestFactory,
    responseProcessor?: RestrictionPoliciesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new RestrictionPoliciesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new RestrictionPoliciesApiResponseProcessor();
  }

  /**
   * Retrieves the restriction policy associated with a specified resource.
   * @param param The request object
   */
  public getRestrictionPolicy(
    param: RestrictionPoliciesApiGetRestrictionPolicyRequest,
    options?: Configuration
  ): Promise<GetRestrictionPolicyResponse> {
    const requestContextPromise = this.requestFactory.getRestrictionPolicy(
      param.resourceId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRestrictionPolicy(responseContext);
        });
    });
  }
}
