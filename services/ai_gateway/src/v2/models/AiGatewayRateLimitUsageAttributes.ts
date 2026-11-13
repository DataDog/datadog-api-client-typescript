import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Live consumption of one AI Gateway rate limit.
 */
export class AiGatewayRateLimitUsageAttributes {
  /**
   * Priced spend, in microcents, counted in the rolling one-minute window. Only rules with a cost limit count it, so it is 0 for other rules and for the untracked and total entries.
   */
  "costMicrocents"?: number;
  /**
   * Input tokens counted in the rolling one-minute window.
   */
  "inputTokens": number;
  /**
   * Requests this rate limit rejected in the last 15 minutes. Applies when mode is ENFORCE.
   */
  "limitedRequests": number;
  /**
   * Output tokens counted in the rolling one-minute window.
   */
  "outputTokens": number;
  /**
   * Requests counted in the rolling one-minute window.
   */
  "requests": number;
  /**
   * Requests this rate limit would have rejected in the last 15 minutes. Applies when mode is ALERT.
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
    costMicrocents: {
      baseName: "cost_microcents",
      type: "number",
      format: "int64",
    },
    inputTokens: {
      baseName: "input_tokens",
      type: "number",
      required: true,
      format: "int64",
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
    requests: {
      baseName: "requests",
      type: "number",
      required: true,
      format: "int64",
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
    return AiGatewayRateLimitUsageAttributes.attributeTypeMap;
  }

  public constructor() {}
}
