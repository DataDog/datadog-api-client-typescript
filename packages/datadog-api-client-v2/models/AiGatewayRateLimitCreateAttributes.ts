/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayRateLimitMode } from "./AiGatewayRateLimitMode";
import { AiGatewayRateLimitSelectorEntry } from "./AiGatewayRateLimitSelectorEntry";
import { AiGatewayRateLimitWindowLimit } from "./AiGatewayRateLimitWindowLimit";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Attributes used to create an AI Gateway rate limit.
 */
export class AiGatewayRateLimitCreateAttributes {
  /**
   * Maximum priced spend per rolling minute, in microcents of 1e-8 USD each. In `ENFORCE` mode, the gateway rejects requests to models with no pricing because their cost can't be counted.
   */
  "costMicrocentsPerMinute"?: Int64;
  /**
   * Maximum input tokens per rolling minute.
   */
  "inputTokensPerMinute"?: Int64;
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
  "outputTokensPerMinute"?: Int64;
  /**
   * Maximum requests per rolling minute. At least one of `requests_per_minute`, `input_tokens_per_minute`, `output_tokens_per_minute`, `cost_microcents_per_minute`, or a non-empty `window_limits` is required.
   */
  "requestsPerMinute"?: Int64;
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
   * Limits over rolling windows longer than a minute, such as $20 of spend per 24 hours. This field is available only to organizations with the feature enabled. Other organizations receive a 400 Bad Request response for a non-empty list. Each limit counts the rule's matching traffic, or each counter of a template rate limit, over its window. Set per-minute limits in the `*_per_minute` fields. A rule can have at most four limits in total, including any per-minute limits that are set. Each metric and window pair can appear only once, and for the same metric, a longer window must have a larger amount. In `ENFORCE` mode, the gateway rejects a request that exceeds any limit with HTTP 429 and a `Retry-After` header. If the list includes a `cost` limit, the gateway also rejects requests to models with no pricing because their cost can't be counted.
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
    return AiGatewayRateLimitCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
