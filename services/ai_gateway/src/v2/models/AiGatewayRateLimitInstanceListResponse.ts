import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayRateLimitInstanceResource } from "./AiGatewayRateLimitInstanceResource";

/**
 * Response containing counters of a template rate limit.
 */
export class AiGatewayRateLimitInstanceListResponse {
  "data": Array<AiGatewayRateLimitInstanceResource>;
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
      type: "Array<AiGatewayRateLimitInstanceResource>",
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
    return AiGatewayRateLimitInstanceListResponse.attributeTypeMap;
  }

  public constructor() {}
}
