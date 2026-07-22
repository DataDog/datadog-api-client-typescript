import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRateLimitAdaptiveConfig } from "./RumRateLimitAdaptiveConfig";
import { RumRateLimitCustomConfig } from "./RumRateLimitCustomConfig";
import { RumRateLimitMode } from "./RumRateLimitMode";

/**
 * The RUM rate limit configuration properties to create or update.
 */
export class RumRateLimitConfigUpdateAttributes {
  /**
   * The configuration used when `mode` is `adaptive`.
   */
  "adaptive"?: RumRateLimitAdaptiveConfig;
  /**
   * The configuration used when `mode` is `custom`.
   */
  "custom"?: RumRateLimitCustomConfig;
  /**
   * The rate limit mode. `custom` enforces a fixed session limit, while
   * `adaptive` dynamically adjusts retention.
   */
  "mode": RumRateLimitMode;
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
    adaptive: {
      baseName: "adaptive",
      type: "RumRateLimitAdaptiveConfig",
    },
    custom: {
      baseName: "custom",
      type: "RumRateLimitCustomConfig",
    },
    mode: {
      baseName: "mode",
      type: "RumRateLimitMode",
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
    return RumRateLimitConfigUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
