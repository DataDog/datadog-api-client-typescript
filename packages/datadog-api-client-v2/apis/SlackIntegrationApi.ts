import { BaseAPIRequestFactory, RequiredError } from "../../datadog-api-client-common/baseapi";
import { Configuration,
  applySecurityAuthentication,} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
    
  } from "../../datadog-api-client-common/http/http";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { SlackUserBindingsResponse } from "../models/SlackUserBindingsResponse";

export class SlackIntegrationApiRequestFactory extends BaseAPIRequestFactory {


  public async listSlackUserBindings(userUuid: string,_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'userUuid' is not null or undefined
    if (userUuid === null || userUuid === undefined) {
      throw new RequiredError('userUuid', 'listSlackUserBindings');
    }

    // Path Params
    const localVarPath = '/api/v2/integration/slack/user-bindings';

    // Make Request Context
    const requestContext = _config.getServer('v2.SlackIntegrationApi.listSlackUserBindings').makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
  if (userUuid !== undefined) {
      requestContext.setQueryParam("user_uuid", ObjectSerializer.serialize(userUuid, "string", "uuid"
), "");
    }

    // Apply auth methods
      applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class SlackIntegrationApiResponseProcessor {


  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listSlackUserBindings
   * @throws ApiException if the response code was not in [200, 299]
   */
   public async listSlackUserBindings(response: ResponseContext): Promise<SlackUserBindingsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: SlackUserBindingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SlackUserBindingsResponse"
      ) as SlackUserBindingsResponse;
      return body;
    }
    if (response.httpStatusCode === 400||response.httpStatusCode === 403||response.httpStatusCode === 429) {
      const bodyText = ObjectSerializer.parse(await response.body.text(), contentType);
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.debug(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(response.httpStatusCode, bodyText);
      } 
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

   // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SlackUserBindingsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SlackUserBindingsResponse",
        "",
      ) as SlackUserBindingsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
  }
}

export interface SlackIntegrationApiListSlackUserBindingsRequest {
  /**
   * The UUID of the Datadog user to list Slack bindings for.
   * @type string
   */
  userUuid: string
}

export class SlackIntegrationApi {
  private requestFactory: SlackIntegrationApiRequestFactory;
  private responseProcessor: SlackIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(configuration: Configuration, requestFactory?: SlackIntegrationApiRequestFactory, responseProcessor?: SlackIntegrationApiResponseProcessor) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new SlackIntegrationApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new SlackIntegrationApiResponseProcessor();
  }

  /**
   * List all Slack user bindings for a given Datadog user from the Datadog Slack integration.
   * @param param The request object
   */
  public listSlackUserBindings(param: SlackIntegrationApiListSlackUserBindingsRequest, options?: Configuration): Promise<SlackUserBindingsResponse> {
    const requestContextPromise = this.requestFactory.listSlackUserBindings(param.userUuid,options);
    return requestContextPromise.then(requestContext => {
        return this.configuration.httpApi.send(requestContext).then(responseContext => {
            return this.responseProcessor.listSlackUserBindings(responseContext);
        });
    });
  }
}