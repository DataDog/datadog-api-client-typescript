import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetLiveSpan } from "./WidgetLiveSpan";

/**
 * Relative timeframe.
 */
export class NotebookRelativeTime {
  /**
   * The available timeframes depend on the widget you are using.
   */
  "liveSpan": WidgetLiveSpan;
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
    liveSpan: {
      baseName: "live_span",
      type: "WidgetLiveSpan",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookRelativeTime.attributeTypeMap;
  }

  public constructor() {}
}
