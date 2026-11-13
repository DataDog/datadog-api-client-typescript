import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Aggregate of a template rate limit's counters.
 */
export class AiGatewayRateLimitInstancesSummaryAttributes {
  /**
   * Number of counters that were near or at a limit, or limited a request, in the last hour. Counters with room to spare aren't recorded.
   */
  "instanceCount": number;
  /**
   * Requests the counters rejected in the last 15 minutes (ENFORCE), totaled over the counters whose usage was read.
   */
  "limitedRequests"?: number;
  /**
   * Counters that limited, or would have limited, a request in the last 15 minutes.
   */
  "limitingCount": number;
  /**
   * Utilization of the fullest counter.
   */
  "maxUtilization": number;
  /**
   * Counters at 80% or more of a limit in the rolling window.
   */
  "nearLimitCount": number;
  /**
   * Rate limit UUID.
   */
  "rateLimitId": string;
  /**
   * True when the caller can't see the template's selector because it lists a provider or model the caller can't access. The counters are then hidden, and every count is zero.
   */
  "scopeRestricted"?: boolean;
  /**
   * True when some recently active counters' usage wasn't read, so the counts may be low.
   */
  "truncated": boolean;
  /**
   * Requests the counters would have rejected in the last 15 minutes (ALERT), totaled over the counters whose usage was read.
   */
  "wouldLimitRequests"?: number;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    instanceCount: {
      baseName: "instance_count",
      type: "number",
      required: true,
      format: "int64",
    },
    limitedRequests: {
      baseName: "limited_requests",
      type: "number",
      format: "int64",
    },
    limitingCount: {
      baseName: "limiting_count",
      type: "number",
      required: true,
      format: "int64",
    },
    maxUtilization: {
      baseName: "max_utilization",
      type: "number",
      required: true,
      format: "double",
    },
    nearLimitCount: {
      baseName: "near_limit_count",
      type: "number",
      required: true,
      format: "int64",
    },
    rateLimitId: {
      baseName: "rate_limit_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    scopeRestricted: {
      baseName: "scope_restricted",
      type: "boolean",
    },
    truncated: {
      baseName: "truncated",
      type: "boolean",
      required: true,
    },
    wouldLimitRequests: {
      baseName: "would_limit_requests",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AiGatewayRateLimitInstancesSummaryAttributes.attributeTypeMap;
  }

  public constructor() {}
}
