import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRateLimitConfigAttributes } from "./RumRateLimitConfigAttributes";
import { RumRateLimitConfigType } from "./RumRateLimitConfigType";

/**
 * The RUM rate limit configuration object.
 */
export class RumRateLimitConfigData {
  /**
   * The RUM rate limit configuration properties.
   */
  "attributes": RumRateLimitConfigAttributes;
  /**
   * The identifier of the scope the rate limit configuration applies to.
   */
  "id": string;
  /**
   * The type of the resource, always `rum_rate_limit_config`.
   */
  "type": RumRateLimitConfigType;
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
      type: "RumRateLimitConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumRateLimitConfigType",
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
    return RumRateLimitConfigData.attributeTypeMap;
  }

  public constructor() {}
}
