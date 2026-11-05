import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRateLimitUsageResource } from "./AiGatewayRateLimitUsageResource";

/**
 * Response containing live usage for the organization's AI Gateway rate limits.
 */
export class AiGatewayRateLimitUsageListResponse {
  "data": Array<AiGatewayRateLimitUsageResource>;
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
      type: "Array<AiGatewayRateLimitUsageResource>",
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
    return AiGatewayRateLimitUsageListResponse.attributeTypeMap;
  }

  public constructor() {}
}
