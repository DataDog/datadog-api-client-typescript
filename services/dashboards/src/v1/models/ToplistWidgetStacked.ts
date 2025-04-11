import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ToplistWidgetLegend } from "./ToplistWidgetLegend";
import { ToplistWidgetStackedType } from "./ToplistWidgetStackedType";

/**
 * Top list widget stacked display options.
 */
export class ToplistWidgetStacked {
  /**
   * Top list widget stacked legend behavior.
   */
  "legend"?: ToplistWidgetLegend;
  /**
   * Top list widget stacked display type.
   */
  "type": ToplistWidgetStackedType;
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
    legend: {
      baseName: "legend",
      type: "ToplistWidgetLegend",
    },
    type: {
      baseName: "type",
      type: "ToplistWidgetStackedType",
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
    return ToplistWidgetStacked.attributeTypeMap;
  }

  public constructor() {}
}
