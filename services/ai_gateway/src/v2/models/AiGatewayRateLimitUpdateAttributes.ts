import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRateLimitMode } from "./AiGatewayRateLimitMode";
import { AiGatewayRateLimitWindowLimit } from "./AiGatewayRateLimitWindowLimit";

/**
 * Attributes used to update an AI Gateway rate limit. Only sent fields are changed.
 */
export class AiGatewayRateLimitUpdateAttributes {
  /**
   * Spend limit in microcents per rolling minute. Set to 0 to remove the cost limit. Null is ignored. At least one limit, per-minute or in `window_limits`, must remain.
   */
  "costMicrocentsPerMinute"?: number;
  /**
   * Whether this rate limit is active.
   */
  "enabled"?: boolean;
  /**
   * Set to 0 to remove the input token limit. Null is ignored. At least one limit, per-minute or in `window_limits`, must remain.
   */
  "inputTokensPerMinute"?: number;
  /**
   * Action taken when request rate exceeds the limit.
   */
  "mode"?: AiGatewayRateLimitMode;
  /**
   * Rate limit name.
   */
  "name"?: string;
  /**
   * Set to 0 to remove the output token limit. Null is ignored. At least one limit, per-minute or in `window_limits`, must remain.
   */
  "outputTokensPerMinute"?: number;
  /**
   * Set to 0 to remove the request limit. Null is ignored. At least one limit, per-minute or in `window_limits`, must remain.
   */
  "requestsPerMinute"?: number;
  /**
   * Replaces all scope tags. An empty object clears them. Null is ignored.
   */
  "tags"?: { [key: string]: string };
  /**
   * Replaces the Team scope. An empty string clears it. Null is ignored.
   */
  "teamId"?: string;
  /**
   * Replaces the user scope. An empty string clears it. Null is ignored.
   */
  "userId"?: string;
  /**
   * Replaces all limits over rolling windows longer than a minute. If `window_limits` is null or omitted, the existing limits are unchanged. An empty array removes them all. This field is available only to organizations with the feature enabled. Other organizations receive a 400 Bad Request response for a non-empty list. The same rules as on create apply. A rule can have at most four limits in total, including any per-minute limits that are set. Each metric and window pair can appear only once, and for the same metric, a longer window must have a larger amount. In `ENFORCE` mode, if the list includes a `cost` limit, the gateway rejects requests to models with no pricing because their cost can't be counted.
   */
  "windowLimits"?: Array<AiGatewayRateLimitWindowLimit>;
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
    costMicrocentsPerMinute: {
      baseName: "cost_microcents_per_minute",
      type: "number",
      format: "int64",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    inputTokensPerMinute: {
      baseName: "input_tokens_per_minute",
      type: "number",
      format: "int64",
    },
    mode: {
      baseName: "mode",
      type: "AiGatewayRateLimitMode",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    outputTokensPerMinute: {
      baseName: "output_tokens_per_minute",
      type: "number",
      format: "int64",
    },
    requestsPerMinute: {
      baseName: "requests_per_minute",
      type: "number",
      format: "int64",
    },
    tags: {
      baseName: "tags",
      type: "{ [key: string]: string; }",
    },
    teamId: {
      baseName: "team_id",
      type: "string",
    },
    userId: {
      baseName: "user_id",
      type: "string",
    },
    windowLimits: {
      baseName: "window_limits",
      type: "Array<AiGatewayRateLimitWindowLimit>",
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
    return AiGatewayRateLimitUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
