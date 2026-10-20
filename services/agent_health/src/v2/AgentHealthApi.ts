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
import { AgentHealthAgentType } from "./models/AgentHealthAgentType";
import { AgentHealthHostIssuesResponse } from "./models/AgentHealthHostIssuesResponse";
import { APIErrorResponse } from "./models/APIErrorResponse";
import { version } from "../version";

export class AgentHealthApiRequestFactory extends BaseAPIRequestFactory {
  public userAgent: string | undefined;

  public constructor(configuration: Configuration) {
    super(configuration);
    if (!isBrowser) {
      this.userAgent = buildUserAgent("agent-health", version);
    }
  }
  public async listAgentHealthHostIssues(
    resourceId: string,
    agentType?: AgentHealthAgentType,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'resourceId' is not null or undefined
    if (resourceId === null || resourceId === undefined) {
      throw new RequiredError("resourceId", "listAgentHealthHostIssues");
    }

    // Path Params
    const localVarPath =
      "/api/v2/agenthealth/hosts/{resource_id}/issues".replace(
        "{resource_id}",
        encodeURIComponent(String(resourceId)),
      );

    // Make Request Context
    const { server, overrides } = _config.getServerAndOverrides(
      "AgentHealthApi.v2.listAgentHealthHostIssues",
      AgentHealthApi.operationServers,
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

    // Set IaC header
    if (_config.isIaC) {
      requestContext.setHeaderParam("X-Datadog-Managed-By", "iac");
    }

    // Query Params
    if (agentType !== undefined) {
      requestContext.setQueryParam(
        "agent_type",
        serialize(agentType, TypingInfo, "AgentHealthAgentType", ""),
        "",
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }
}

export class AgentHealthApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listAgentHealthHostIssues
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAgentHealthHostIssues(
    response: ResponseContext,
  ): Promise<AgentHealthHostIssuesResponse> {
    const contentType = normalizeMediaType(response.headers["content-type"]);
    if (response.httpStatusCode === 200) {
      const body: AgentHealthHostIssuesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AgentHealthHostIssuesResponse",
      ) as AgentHealthHostIssuesResponse;
      return body;
    }
    if (
      response.httpStatusCode === 400 ||
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
      const body: AgentHealthHostIssuesResponse = deserialize(
        parse(await response.body.text(), contentType),
        TypingInfo,
        "AgentHealthHostIssuesResponse",
        "",
      ) as AgentHealthHostIssuesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"',
    );
  }
}

export interface AgentHealthApiListAgentHealthHostIssuesRequest {
  /**
   * Resource identifier whose active Agent Health issues should be returned: a DaemonSet UID for a node Agent or a cluster UUID for a Cluster Agent.
   * @type string
   */
  resourceId: string;
  /**
   * Agent type associated with the resource. Defaults to `node` when omitted.
   * @type AgentHealthAgentType
   */
  agentType?: AgentHealthAgentType;
}

export class AgentHealthApi {
  private requestFactory: AgentHealthApiRequestFactory;
  private responseProcessor: AgentHealthApiResponseProcessor;
  private configuration: Configuration;

  static operationServers: { [key: string]: BaseServerConfiguration[] } = {};

  public constructor(
    configuration?: Configuration,
    requestFactory?: AgentHealthApiRequestFactory,
    responseProcessor?: AgentHealthApiResponseProcessor,
  ) {
    this.configuration = configuration || createConfiguration();
    this.requestFactory =
      requestFactory || new AgentHealthApiRequestFactory(this.configuration);
    this.responseProcessor =
      responseProcessor || new AgentHealthApiResponseProcessor();
  }

  /**
   * Returns the active Agent Health issues for a node Agent or Cluster Agent resource.
   * @param param The request object
   */
  public listAgentHealthHostIssues(
    param: AgentHealthApiListAgentHealthHostIssuesRequest,
    options?: Configuration,
  ): Promise<AgentHealthHostIssuesResponse> {
    const requestContextPromise = this.requestFactory.listAgentHealthHostIssues(
      param.resourceId,
      param.agentType,
      options,
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAgentHealthHostIssues(
            responseContext,
          );
        });
    });
  }
}
