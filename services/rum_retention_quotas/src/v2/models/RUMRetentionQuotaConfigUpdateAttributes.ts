import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRetentionQuotaCustomConfig } from "./RUMRetentionQuotaCustomConfig";
import { RUMRetentionQuotaMode } from "./RUMRetentionQuotaMode";

/**
 * The RUM retention quota configuration properties to create or update.
 */
export class RUMRetentionQuotaConfigUpdateAttributes {
  /**
   * The configuration used when `mode` is `custom`.
   */
  "custom"?: RUMRetentionQuotaCustomConfig;
  /**
   * The retention quota mode. `custom` enforces a fixed session limit.
   * `custom` is the only supported mode.
   */
  "mode": RUMRetentionQuotaMode;
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
    custom: {
      baseName: "custom",
      type: "RUMRetentionQuotaCustomConfig",
    },
    mode: {
      baseName: "mode",
      type: "RUMRetentionQuotaMode",
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
    return RUMRetentionQuotaConfigUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
