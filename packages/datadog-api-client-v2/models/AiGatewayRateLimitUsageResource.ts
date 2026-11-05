/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayRateLimitUsageAttributes } from "./AiGatewayRateLimitUsageAttributes";
import { AiGatewayRateLimitUsageType } from "./AiGatewayRateLimitUsageType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Live usage for one AI Gateway rate limit, or for the untracked or total traffic.
 */
export class AiGatewayRateLimitUsageResource {
  /**
   * Live consumption of one AI Gateway rate limit.
   */
  "attributes": AiGatewayRateLimitUsageAttributes;
  /**
   * Rate limit UUID, `untracked` for traffic no enforced rate limit covers, or `total` for all gateway traffic.
   */
  "id": string;
  /**
   * AI Gateway rate limit usage resource type.
   */
  "type": AiGatewayRateLimitUsageType;

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
      type: "AiGatewayRateLimitUsageAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayRateLimitUsageType",
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
    return AiGatewayRateLimitUsageResource.attributeTypeMap;
  }

  public constructor() {}
}
