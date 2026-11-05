import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRateLimitAttributes } from "./AiGatewayRateLimitAttributes";
import { AiGatewayRateLimitType } from "./AiGatewayRateLimitType";

/**
 * AI Gateway rate limit resource.
 */
export class AiGatewayRateLimitResource {
  /**
   * Attributes of an AI Gateway rate limit.
   */
  "attributes": AiGatewayRateLimitAttributes;
  /**
   * Rate limit UUID.
   */
  "id": string;
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
      type: "AiGatewayRateLimitAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return AiGatewayRateLimitResource.attributeTypeMap;
  }

  public constructor() {}
}
