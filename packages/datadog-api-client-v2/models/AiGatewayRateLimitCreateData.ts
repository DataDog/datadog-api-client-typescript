/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayRateLimitCreateAttributes } from "./AiGatewayRateLimitCreateAttributes";
import { AiGatewayRateLimitType } from "./AiGatewayRateLimitType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data used to create an AI Gateway rate limit.
 */
export class AiGatewayRateLimitCreateData {
  /**
   * Attributes used to create an AI Gateway rate limit.
   */
  "attributes": AiGatewayRateLimitCreateAttributes;
  /**
   * AI Gateway rate limit resource type.
   */
  "type": AiGatewayRateLimitType;

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
    attributes: {
      baseName: "attributes",
      type: "AiGatewayRateLimitCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayRateLimitType",
      required: true,
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
    return AiGatewayRateLimitCreateData.attributeTypeMap;
  }

  public constructor() {}
}
