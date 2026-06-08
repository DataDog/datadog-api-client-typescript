import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRateLimitConfigData } from "./RumRateLimitConfigData";

/**
 * The RUM rate limit configuration response.
 */
export class RumRateLimitConfigResponse {
  /**
   * The RUM rate limit configuration object.
   */
  "data": RumRateLimitConfigData;
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
      type: "RumRateLimitConfigData",
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
    return RumRateLimitConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
