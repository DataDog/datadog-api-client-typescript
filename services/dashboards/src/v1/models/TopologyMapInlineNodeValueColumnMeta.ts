import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NumberFormatUnit } from "./NumberFormatUnit";

/**
 * Display options for a value column.
 */
export class TopologyMapInlineNodeValueColumnMeta {
  /**
   * Number format unit.
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
    return TopologyMapInlineNodeValueColumnMeta.attributeTypeMap;
  }

  public constructor() {}
}
