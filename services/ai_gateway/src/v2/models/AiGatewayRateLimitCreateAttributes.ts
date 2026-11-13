import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRateLimitMode } from "./AiGatewayRateLimitMode";
import { AiGatewayRateLimitSelectorEntry } from "./AiGatewayRateLimitSelectorEntry";

/**
 * Attributes used to create an AI Gateway rate limit.
 */
export class AiGatewayRateLimitCreateAttributes {
  /**
   * Maximum input tokens per rolling minute.
   */
  "inputTokensPerMinute"?: number;
  /**
   * Action taken when request rate exceeds the limit.
   */
  "mode"?: AiGatewayRateLimitMode;
  /**
   * Rate limit name. Must not be empty.
   */
  "name": string;
  /**
   * Maximum output tokens per rolling minute.
   */
  "outputTokensPerMinute"?: number;
  /**
   * Maximum requests per rolling minute. At least one of `requests_per_minute`, `input_tokens_per_minute`, and `output_tokens_per_minute` is required.
   */
  "requestsPerMinute"?: number;
  /**
   * Dimension rules for a template rate limit, which gives each matched user, Team, or value its own allowance with the rule's limits. Can't be combined with user_id, team_id, or tags, and can't be changed after creation. Omit for a rule with one shared allowance.
   */
  "selector"?: Array<AiGatewayRateLimitSelectorEntry>;
  /**
   * Optional scope tags, such as `provider`, `model`, `ml_app`, or custom dimensions. A request matches when it has all of these tags. The reserved metadata keys `name`, `budget_name`, and `span_filter` are rejected.
   */
  "tags"?: { [key: string]: string };
  /**
   * Optional UUID. Count only requests attributed to this Datadog Team.
   */
  "teamId"?: string;
  /**
   * Optional UUID. Count only this user's requests.
   */
  "userId"?: string;
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
      required: true,
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
    selector: {
      baseName: "selector",
      type: "Array<AiGatewayRateLimitSelectorEntry>",
    },
    tags: {
      baseName: "tags",
      type: "{ [key: string]: string; }",
    },
    teamId: {
      baseName: "team_id",
      type: "string",
      format: "uuid",
    },
    userId: {
      baseName: "user_id",
      type: "string",
      format: "uuid",
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
    return AiGatewayRateLimitCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
