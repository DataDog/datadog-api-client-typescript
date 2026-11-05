/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayRateLimitMode } from "./AiGatewayRateLimitMode";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Attributes used to update an AI Gateway rate limit. Only sent fields are changed.
 */
export class AiGatewayRateLimitUpdateAttributes {
  /**
   * Whether this rate limit is active.
   */
  "enabled"?: boolean;
  /**
   * Set to 0 to remove the request limit. Null is ignored. At least one limit must remain.
   */
  "inputTokensPerMinute"?: Int64;
  /**
   * Action taken when request rate exceeds the limit.
   */
  "mode"?: AiGatewayRateLimitMode;
  /**
   * Rate limit name.
   */
  "name"?: string;
  /**
   * Set to 0 to remove the request limit. Null is ignored. At least one limit must remain.
   */
  "outputTokensPerMinute"?: Int64;
  /**
   * Set to 0 to remove the request limit. Null is ignored. At least one limit must remain.
   */
  "requestsPerMinute"?: Int64;
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
