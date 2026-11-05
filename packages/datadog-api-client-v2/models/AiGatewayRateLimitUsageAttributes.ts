/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Live consumption of one AI Gateway rate limit.
 */
export class AiGatewayRateLimitUsageAttributes {
  /**
   * Input tokens counted in the rolling one-minute window.
   */
  "inputTokens": Int64;
  /**
   * Requests this rate limit rejected in the last 15 minutes. Applies when mode is ENFORCE.
   */
  "limitedRequests": Int64;
  /**
   * Output tokens counted in the rolling one-minute window.
   */
  "outputTokens": Int64;
  /**
   * Requests counted in the rolling one-minute window.
   */
  "requests": Int64;
  /**
   * Requests this rate limit would have rejected in the last 15 minutes. Applies when mode is ALERT.
   */
  "wouldLimitRequests": Int64;

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
