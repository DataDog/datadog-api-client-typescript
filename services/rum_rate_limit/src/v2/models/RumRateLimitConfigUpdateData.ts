import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRateLimitConfigType } from "./RumRateLimitConfigType";
import { RumRateLimitConfigUpdateAttributes } from "./RumRateLimitConfigUpdateAttributes";

/**
 * The RUM rate limit configuration to create or update.
 */
export class RumRateLimitConfigUpdateData {
  /**
   * The RUM rate limit configuration properties to create or update.
   */
  "attributes": RumRateLimitConfigUpdateAttributes;
  /**
   * The identifier of the scope the rate limit configuration applies to.
   * Must match `scope_id` in the path.
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
  "additionalProperties"?: { [key: string]: any; };
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
      type: "RumRateLimitConfigUpdateAttributes",
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
    return RumRateLimitConfigUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
