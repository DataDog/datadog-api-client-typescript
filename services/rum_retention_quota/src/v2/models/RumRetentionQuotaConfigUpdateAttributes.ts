import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRetentionQuotaAdaptiveConfig } from "./RumRetentionQuotaAdaptiveConfig";
import { RumRetentionQuotaCustomConfig } from "./RumRetentionQuotaCustomConfig";
import { RumRetentionQuotaMode } from "./RumRetentionQuotaMode";

/**
 * The RUM retention quota configuration properties to create or update.
 */
export class RumRetentionQuotaConfigUpdateAttributes {
  /**
   * The configuration used when `mode` is `adaptive`.
   */
  "adaptive"?: RumRetentionQuotaAdaptiveConfig;
  /**
   * The configuration used when `mode` is `custom`.
   */
  "custom"?: RumRetentionQuotaCustomConfig;
  /**
   * The retention quota mode. `custom` enforces a fixed session limit, while
   * `adaptive` dynamically adjusts retention.
   */
  "mode": RumRetentionQuotaMode;
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
    adaptive: {
      baseName: "adaptive",
      type: "RumRetentionQuotaAdaptiveConfig",
    },
    custom: {
      baseName: "custom",
      type: "RumRetentionQuotaCustomConfig",
    },
    mode: {
      baseName: "mode",
      type: "RumRetentionQuotaMode",
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
    return RumRetentionQuotaConfigUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
