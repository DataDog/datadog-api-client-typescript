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
import { JSONAPIErrorResponse } from "../models/JSONAPIErrorResponse";
import { RuleBasedViewResponse } from "../models/RuleBasedViewResponse";

export class ComplianceApiRequestFactory extends BaseAPIRequestFactory {
  public async getRuleBasedView(
    to: number,
    framework?: string,
    version?: string,
    queryFindingsWithoutFrameworkVersion?: boolean,
    includeRulesWithoutFindings?: boolean,
    isCustom?: boolean,
    query?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getRuleBasedView'");
    if (!_config.unstableOperations["v2.getRuleBasedView"]) {
      throw new Error("Unstable operation 'getRuleBasedView' is disabled");
    }

    // verify required parameter 'to' is not null or undefined
    if (to === null || to === undefined) {
      throw new RequiredError("to", "getRuleBasedView");
    }

    // Path Params
    const localVarPath = "/api/v2/compliance_findings/rule_based_view";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.ComplianceApi.getRuleBasedView")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (to !== undefined) {
      requestContext.setQueryParam(
        "to",
        ObjectSerializer.serialize(to, "number", "int64"),
        ""
      );
    }
    if (framework !== undefined) {
      requestContext.setQueryParam(
        "framework",
        ObjectSerializer.serialize(framework, "string", ""),
        ""
      );
    }
    if (version !== undefined) {
      requestContext.setQueryParam(
        "version",
        ObjectSerializer.serialize(version, "string", ""),
        ""
      );
    }
    if (queryFindingsWithoutFrameworkVersion !== undefined) {
      requestContext.setQueryParam(
        "query_findings_without_framework_version",
        ObjectSerializer.serialize(
          queryFindingsWithoutFrameworkVersion,
          "boolean",
          ""
        ),
        ""
      );
    }
    if (includeRulesWithoutFindings !== undefined) {
      requestContext.setQueryParam(
        "include_rules_without_findings",
        ObjectSerializer.serialize(includeRulesWithoutFindings, "boolean", ""),
        ""
      );
    }
    if (isCustom !== undefined) {
      requestContext.setQueryParam(
        "is_custom",
        ObjectSerializer.serialize(isCustom, "boolean", ""),
        ""
      );
    }
    if (query !== undefined) {
      requestContext.setQueryParam(
        "query",
        ObjectSerializer.serialize(query, "string", ""),
        ""
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
      "AuthZ",
    ]);

    return requestContext;
  }
}

export class ComplianceApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getRuleBasedView
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getRuleBasedView(
    response: ResponseContext
  ): Promise<RuleBasedViewResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode === 200) {
      const body: RuleBasedViewResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RuleBasedViewResponse"
      ) as RuleBasedViewResponse;
      return body;
    }
    if (response.httpStatusCode === 400 || response.httpStatusCode === 503) {
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
    if (response.httpStatusCode === 403 || response.httpStatusCode === 429) {
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
      const body: RuleBasedViewResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RuleBasedViewResponse",
        ""
      ) as RuleBasedViewResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface ComplianceApiGetRuleBasedViewRequest {
  /**
   * Timestamp of the query end, in milliseconds since the Unix epoch.
   * @type number
   */
  to: number;
  /**
   * Compliance framework handle to filter rules and findings by.
   * @type string
   */
  framework?: string;
  /**
   * Version of the compliance framework to filter rules and findings by.
   * @type string
   */
  version?: string;
  /**
   * When `true`, returns findings without a `framework_version` tag. Used for findings from custom frameworks or those created before framework versioning was introduced.
   * @type boolean
   */
  queryFindingsWithoutFrameworkVersion?: boolean;
  /**
   * When `true`, includes rules in the response that have no associated findings.
   * @type boolean
   */
  includeRulesWithoutFindings?: boolean;
  /**
   * Set to `true` when the requested `framework` is a custom framework.
   * @type boolean
   */
  isCustom?: boolean;
  /**
   * Additional event-platform filters applied to the underlying findings query. For example, `scored:true project_id:datadog-prod-us5`.
   * @type string
   */
  query?: string;
}

export class ComplianceApi {
  private requestFactory: ComplianceApiRequestFactory;
  private responseProcessor: ComplianceApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ComplianceApiRequestFactory,
    responseProcessor?: ComplianceApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ComplianceApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ComplianceApiResponseProcessor();
  }

  /**
   * Get an aggregated view of compliance rules with their pass, fail, and muted finding counts.
   * Supports filtering by compliance framework, framework version, and additional query filters.
   * @param param The request object
   */
  public getRuleBasedView(
    param: ComplianceApiGetRuleBasedViewRequest,
    options?: Configuration
  ): Promise<RuleBasedViewResponse> {
    const requestContextPromise = this.requestFactory.getRuleBasedView(
      param.to,
      param.framework,
      param.version,
      param.queryFindingsWithoutFrameworkVersion,
      param.includeRulesWithoutFindings,
      param.isCustom,
      param.query,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getRuleBasedView(responseContext);
        });
    });
  }
}
