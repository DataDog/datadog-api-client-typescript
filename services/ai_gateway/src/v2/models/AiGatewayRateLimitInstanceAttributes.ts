import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * One counter of a template rate limit and its live usage.
 */
export class AiGatewayRateLimitInstanceAttributes {
  /**
   * When the gateway first recorded a request for this counter.
   */
  "firstSeen": Date;
  /**
   * Input tokens counted in the rolling one-minute window.
   */
  "inputTokens": number;
  /**
   * The rate limit's per-counter input token limit. Null when it doesn't limit input tokens.
   */
  "inputTokensPerMinute"?: number;
  /**
   * Opaque canonical key identifying the counter.
   */
  "instanceKey": string;
  /**
   * When the gateway last recorded a request for this counter; up to a few minutes behind live traffic.
   */
  "lastSeen": Date;
  /**
   * Requests this counter rejected in the last 15 minutes (ENFORCE).
   */
  "limitedRequests": number;
  /**
   * Output tokens counted in the rolling one-minute window.
   */
  "outputTokens": number;
  /**
   * The rate limit's per-counter output token limit. Null when it doesn't limit output tokens.
   */
  "outputTokensPerMinute"?: number;
  /**
   * Rate limit UUID.
   */
  "rateLimitId": string;
  /**
   * Requests counted in the rolling one-minute window.
   */
  "requests": number;
  /**
   * The rate limit's per-counter request limit. Null when it doesn't limit requests.
   */
  "requestsPerMinute"?: number;
  /**
   * The counter's value for each per-value dimension. user_id and team_id values are raw UUIDs; a dimension that requests didn't carry holds the null character (U+0000).
   */
  "splitDims": { [key: string]: string };
  /**
   * False when this counter's usage wasn't read because the request already read the most counters it may. Its usage then reads as zero.
   */
  "usageKnown": boolean;
  /**
   * The fullest of the rate limit's limits in the rolling window, as a fraction. 1 or more means the counter is at its limit.
   */
  "utilization": number;
  /**
   * Requests this counter would have rejected in the last 15 minutes (ALERT).
   */
  "wouldLimitRequests": number;
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
    firstSeen: {
      baseName: "first_seen",
      type: "Date",
      required: true,
      format: "date-time",
    },
    inputTokens: {
      baseName: "input_tokens",
      type: "number",
      required: true,
      format: "int64",
    },
    inputTokensPerMinute: {
      baseName: "input_tokens_per_minute",
      type: "number",
      format: "int64",
    },
    instanceKey: {
      baseName: "instance_key",
      type: "string",
      required: true,
    },
    lastSeen: {
      baseName: "last_seen",
      type: "Date",
      required: true,
      format: "date-time",
    },
    limitedRequests: {
      baseName: "limited_requests",
      type: "number",
      required: true,
      format: "int64",
    },
    outputTokens: {
      baseName: "output_tokens",
      type: "number",
      required: true,
      format: "int64",
    },
    outputTokensPerMinute: {
      baseName: "output_tokens_per_minute",
      type: "number",
      format: "int64",
    },
    rateLimitId: {
      baseName: "rate_limit_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    requests: {
      baseName: "requests",
      type: "number",
      required: true,
      format: "int64",
    },
    requestsPerMinute: {
      baseName: "requests_per_minute",
      type: "number",
      format: "int64",
    },
    splitDims: {
      baseName: "split_dims",
      type: "{ [key: string]: string; }",
      required: true,
    },
    usageKnown: {
      baseName: "usage_known",
      type: "boolean",
      required: true,
    },
    utilization: {
      baseName: "utilization",
      type: "number",
      required: true,
      format: "double",
    },
    wouldLimitRequests: {
      baseName: "would_limit_requests",
      type: "number",
      required: true,
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
    return AiGatewayRateLimitInstanceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
