import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Widget time setting with hide incomplete cost data option.
 */
export class WidgetTimeHideIncompleteData {
  /**
   * Whether to hide incomplete cost data in the widget.
   */
  "hideIncompleteCostData": boolean;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    hideIncompleteCostData: {
      baseName: "hide_incomplete_cost_data",
      type: "boolean",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WidgetTimeHideIncompleteData.attributeTypeMap;
  }

  public constructor() {}
}
