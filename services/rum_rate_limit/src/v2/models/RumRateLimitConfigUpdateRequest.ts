import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRateLimitConfigUpdateData } from "./RumRateLimitConfigUpdateData";

/**
 * The body of a request to create or update a RUM rate limit configuration.
 */
export class RumRateLimitConfigUpdateRequest {
  /**
   * The RUM rate limit configuration to create or update.
   */
  "data": RumRateLimitConfigUpdateData;
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
      type: "RumRateLimitConfigUpdateData",
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
    return RumRateLimitConfigUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
