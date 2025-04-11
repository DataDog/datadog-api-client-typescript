import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NumberFormatUnit } from "./NumberFormatUnit";
import { NumberFormatUnitScale } from "./NumberFormatUnitScale";

/**
 * Number format options for the widget.
 */
export class WidgetNumberFormat {
  /**
   * Number format unit.
   */
  "unit"?: NumberFormatUnit;
  /**
   * The definition of `NumberFormatUnitScale` object.
   */
  "unitScale"?: NumberFormatUnitScale;
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
    unit: {
      baseName: "unit",
      type: "NumberFormatUnit",
    },
    unitScale: {
      baseName: "unit_scale",
      type: "NumberFormatUnitScale",
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
    return WidgetNumberFormat.attributeTypeMap;
  }

  public constructor() {}
}
