import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRateLimitResource } from "./AiGatewayRateLimitResource";

/**
 * Response containing AI Gateway rate limits.
 */
export class AiGatewayRateLimitListResponse {
  "data": Array<AiGatewayRateLimitResource>;
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
      type: "Array<AiGatewayRateLimitResource>",
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
    return AiGatewayRateLimitListResponse.attributeTypeMap;
  }

  public constructor() {}
}
