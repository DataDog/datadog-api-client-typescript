import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRateLimitMode } from "./AiGatewayRateLimitMode";

/**
 * Attributes of an AI Gateway rate limit.
 */
export class AiGatewayRateLimitAttributes {
  /**
   * Creation timestamp.
   */
  "createdAt": Date;
  /**
   * Email of the user who created this rate limit.
   */
  "createdBy": string;
  /**
   * Whether this rate limit is active.
   */
  "enabled": boolean;
  /**
   * Maximum input tokens per rolling minute shared by all matching traffic. Null when this rule does not limit input tokens.
   */
  "inputTokensPerMinute"?: number;
  /**
   * Action taken when request rate exceeds the limit.
   */
  "mode": AiGatewayRateLimitMode;
  /**
   * Datadog monitor that alerts on this rule. Null until one is provisioned.
   */
  "monitorId"?: number;
  /**
   * Rate limit name.
   */
  "name": string;
  /**
   * Maximum output tokens per rolling minute shared by all matching traffic. Null when this rule does not limit output tokens.
   */
  "outputTokensPerMinute"?: number;
  /**
   * Maximum requests per rolling minute shared by all matching traffic. Null when this rule does not limit requests.
   */
  "requestsPerMinute"?: number;
  /**
   * Increases on every change to the definition.
   */
  "revision": number;
  /**
   * Whether provider or model scope metadata was withheld. Omit unchanged scope fields on an unrelated update to preserve their saved values.
   */
  "scopeRestricted": boolean;
  /**
   * Optional scope tags, such as provider, model, ml_app, or custom dimensions. A request matches when it has all of these tags.
   */
  "tags": { [key: string]: string };
  /**
   * Optional Team UUID. Count only requests attributed to this Datadog Team.
   */
  "teamId"?: string;
  /**
   * Last modification timestamp.
   */
  "updatedAt": Date;
  /**
   * Email of the user who last modified this rate limit.
   */
  "updatedBy": string;
  /**
   * Optional user UUID. Count only this user's requests.
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    inputTokensPerMinute: {
      baseName: "input_tokens_per_minute",
      type: "number",
      format: "int64",
    },
    mode: {
      baseName: "mode",
      type: "AiGatewayRateLimitMode",
      required: true,
    },
    monitorId: {
      baseName: "monitor_id",
      type: "number",
      format: "int64",
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
    revision: {
      baseName: "revision",
      type: "number",
      required: true,
      format: "int64",
    },
    scopeRestricted: {
      baseName: "scope_restricted",
      type: "boolean",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "{ [key: string]: string; }",
      required: true,
    },
    teamId: {
      baseName: "team_id",
      type: "string",
      format: "uuid",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    updatedBy: {
      baseName: "updated_by",
      type: "string",
      required: true,
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
    return AiGatewayRateLimitAttributes.attributeTypeMap;
  }

  public constructor() {}
}
