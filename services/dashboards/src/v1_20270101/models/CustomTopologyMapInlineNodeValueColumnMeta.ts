import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NumberFormatUnit } from "./NumberFormatUnit";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CustomTopologyMapInlineNodeValueColumnMeta {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "unit"?: NumberFormatUnit;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    unit: {
      baseName: "unit",
      type: "NumberFormatUnit",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomTopologyMapInlineNodeValueColumnMeta.attributeTypeMap;
  }

  public constructor() {}
}
