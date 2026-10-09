import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Legend configuration for the heatgrid widget.
 */
export class HeatgridLegend {
  /**
   * Whether to display the legend caption.
   */
  "showCaption"?: boolean;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    showCaption: {
      baseName: "show_caption",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridLegend.attributeTypeMap;
  }

  public constructor() {}
}
