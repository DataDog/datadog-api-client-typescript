import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRateLimitUsageAttributes } from "./AiGatewayRateLimitUsageAttributes";
import { AiGatewayRateLimitUsageType } from "./AiGatewayRateLimitUsageType";

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
