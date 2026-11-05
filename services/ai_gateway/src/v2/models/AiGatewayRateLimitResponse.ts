import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRateLimitResource } from "./AiGatewayRateLimitResource";

/**
 * Response containing one AI Gateway rate limit.
 */
export class AiGatewayRateLimitResponse {
  /**
   * AI Gateway rate limit resource.
   */
  "data": AiGatewayRateLimitResource;
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
    data: {
      baseName: "data",
      type: "AiGatewayRateLimitResource",
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
    return AiGatewayRateLimitResponse.attributeTypeMap;
  }

  public constructor() {}
}
