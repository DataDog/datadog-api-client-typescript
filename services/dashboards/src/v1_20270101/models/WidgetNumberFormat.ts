import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NumberFormatUnit } from "./NumberFormatUnit";
import { NumberFormatUnitScale } from "./NumberFormatUnitScale";
import { Precision } from "./Precision";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class WidgetNumberFormat {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "precision"?: Precision;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "unit"?: NumberFormatUnit;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "unitScale"?: NumberFormatUnitScale;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    precision: {
      baseName: "precision",
      type: "Precision",
    },
    unit: {
      baseName: "unit",
      type: "NumberFormatUnit",
    },
    unitScale: {
      baseName: "unit_scale",
      type: "NumberFormatUnitScale",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WidgetNumberFormat.attributeTypeMap;
  }

  public constructor() {}
}
