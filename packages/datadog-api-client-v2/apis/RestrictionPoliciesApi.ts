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
import { RestrictionPolicyResponse } from "../models/RestrictionPolicyResponse";
import { RestrictionPolicyUpdateRequest } from "../models/RestrictionPolicyUpdateRequest";

export class RestrictionPoliciesApiRequestFactory extends BaseAPIRequestFactory {
  public async deleteRestrictionPolicy(
    resourceId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'resourceId' is not null or undefined
    if (resourceId === null || resourceId === undefined) {
      throw new RequiredError("resourceId", "deleteRestrictionPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/restriction_policy/{resource_id}".replace(
      "{resource_id}",
      encodeURIComponent(String(resourceId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RestrictionPoliciesApi.deleteRestrictionPolicy")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

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
    const requestContext = _config
      .getServer("v2.RestrictionPoliciesApi.getRestrictionPolicy")
      .makeRequestContext(localVarPath, HttpMethod.GET);
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

  public async updateRestrictionPolicy(
    resourceId: string,
    body: RestrictionPolicyUpdateRequest,
    allowSelfLockout?: boolean,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'resourceId' is not null or undefined
    if (resourceId === null || resourceId === undefined) {
      throw new RequiredError("resourceId", "updateRestrictionPolicy");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateRestrictionPolicy");
    }

    // Path Params
    const localVarPath = "/api/v2/restriction_policy/{resource_id}".replace(
      "{resource_id}",
      encodeURIComponent(String(resourceId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.RestrictionPoliciesApi.updateRestrictionPolicy")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (allowSelfLockout !== undefined) {
      requestContext.setQueryParam(
        "allow_self_lockout",
        ObjectSerializer.serialize(allowSelfLockout, "boolean", ""),
        ""
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "RestrictionPolicyUpdateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

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
   * @params response Response returned by the server for a request to deleteRestrictionPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteRestrictionPolicy(
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
      response.httpStatusCode === 429
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
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
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
   * @params response Response returned by the server for a request to getRestrictionPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRestrictionPolicy(
    response: ResponseContext
  ): Promise<RestrictionPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RestrictionPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RestrictionPolicyResponse"
      ) as RestrictionPolicyResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
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
      const body: RestrictionPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RestrictionPolicyResponse",
        ""
      ) as RestrictionPolicyResponse;
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
   * @params response Response returned by the server for a request to updateRestrictionPolicy
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateRestrictionPolicy(
    response: ResponseContext
  ): Promise<RestrictionPolicyResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RestrictionPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RestrictionPolicyResponse"
      ) as RestrictionPolicyResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
      response.httpStatusCode === 403 ||
      response.httpStatusCode === 429
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
      const body: RestrictionPolicyResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RestrictionPolicyResponse",
        ""
      ) as RestrictionPolicyResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface RestrictionPoliciesApiDeleteRestrictionPolicyRequest {
  /**
   * Identifier, formatted as `type:id`. Supported types: `connection`, `dashboard`, `integration-account`, `integration-service`, `integration-webhook`, `notebook`, `reference-table`, `security-rule`, `slo`, `workflow`, `app-builder-app`, `connection`, `connection-group`, `rum-application`, `cross-org-connection`.
   * @type string
   */
  resourceId: string;
}

export interface RestrictionPoliciesApiGetRestrictionPolicyRequest {
  /**
   * Identifier, formatted as `type:id`. Supported types: `connection`, `dashboard`, `integration-account`, `integration-service`, `integration-webhook`, `notebook`, `reference-table`, `security-rule`, `slo`, `workflow`, `app-builder-app`, `connection`, `connection-group`, `rum-application`, `cross-org-connection`.
   * @type string
   */
  resourceId: string;
}

export interface RestrictionPoliciesApiUpdateRestrictionPolicyRequest {
  /**
   * Identifier, formatted as `type:id`. Supported types: `connection`, `dashboard`, `integration-account`, `integration-service`, `integration-webhook`, `notebook`, `reference-table`, `security-rule`, `slo`, `workflow`, `app-builder-app`, `connection`, `connection-group`, `rum-application`, `cross-org-connection`.
   * @type string
   */
  resourceId: string;
  /**
   * Restriction policy payload
   * @type RestrictionPolicyUpdateRequest
   */
  body: RestrictionPolicyUpdateRequest;
  /**
   * Allows admins (users with the `user_access_manage` permission) to remove their own access from the resource if set to `true`. By default, this is set to `false`, preventing admins from locking themselves out.
   * @type boolean
   */
  allowSelfLockout?: boolean;
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
   * Deletes the restriction policy associated with a specified resource.
   * @param param The request object
   */
  public deleteRestrictionPolicy(
    param: RestrictionPoliciesApiDeleteRestrictionPolicyRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteRestrictionPolicy(
      param.resourceId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteRestrictionPolicy(
            responseContext
          );
        });
    });
  }

  /**
   * Retrieves the restriction policy associated with a specified resource.
   * @param param The request object
   */
  public getRestrictionPolicy(
    param: RestrictionPoliciesApiGetRestrictionPolicyRequest,
    options?: Configuration
  ): Promise<RestrictionPolicyResponse> {
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

  /**
   * Updates the restriction policy associated with a resource.
   *
   * #### Supported resources
   * Restriction policies can be applied to the following resources:
   * - Dashboards: `dashboard`
   * - Integration Accounts: `integration-account`
   * - Integration Services: `integration-service`
   * - Integration Webhooks: `integration-webhook`
   * - Notebooks: `notebook`
   * - Powerpacks: `powerpack`
   * - Reference Tables: `reference-table`
   * - Security Rules: `security-rule`
   * - Service Level Objectives: `slo`
   * - Synthetic Global Variables: `synthetics-global-variable`
   * - Synthetic Tests: `synthetics-test`
   * - Synthetic Private Locations: `synthetics-private-location`
   * - Monitors: `monitor`
   * - Workflows: `workflow`
   * - App Builder Apps: `app-builder-app`
   * - Connections: `connection`
   * - Connection Groups: `connection-group`
   * - RUM Applications: `rum-application`
   * - Cross Org Connections: `cross-org-connection`
   *
   * #### Supported relations for resources
   * Resource Type               | Supported Relations
   * ----------------------------|--------------------------
   * Dashboards                  | `viewer`, `editor`
   * Integration Accounts        | `viewer`, `editor`
   * Integration Services        | `viewer`, `editor`
   * Integration Webhooks        | `viewer`, `editor`
   * Notebooks                   | `viewer`, `editor`
   * Powerpacks                  | `viewer`, `editor`
   * Security Rules              | `viewer`, `editor`
   * Service Level Objectives    | `viewer`, `editor`
   * Synthetic Global Variables  | `viewer`, `editor`
   * Synthetic Tests             | `viewer`, `editor`
   * Synthetic Private Locations | `viewer`, `editor`
   * Monitors                    | `viewer`, `editor`
   * Reference Tables            | `viewer`, `editor`
   * Workflows                   | `viewer`, `runner`, `editor`
   * App Builder Apps            | `viewer`, `editor`
   * Connections                 | `viewer`, `resolver`, `editor`
   * Connection Groups           | `viewer`, `editor`
   * RUM Application             | `viewer`, `editor`
   * Cross Org Connections       | `viewer`, `editor`
   * @param param The request object
   */
  public updateRestrictionPolicy(
    param: RestrictionPoliciesApiUpdateRestrictionPolicyRequest,
    options?: Configuration
  ): Promise<RestrictionPolicyResponse> {
    const requestContextPromise = this.requestFactory.updateRestrictionPolicy(
      param.resourceId,
      param.body,
      param.allowSelfLockout,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateRestrictionPolicy(
            responseContext
          );
        });
    });
  }
}
