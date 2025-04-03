import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ToplistWidgetDisplay } from "./ToplistWidgetDisplay";
import { ToplistWidgetScaling } from "./ToplistWidgetScaling";

/**
 * Style customization for a top list widget.
 */
export class ToplistWidgetStyle {
  /**
   * Top list widget display options.
   */
  "display"?: ToplistWidgetDisplay;
  /**
   * Color palette to apply to the widget.
   */
  "palette"?: string;
  /**
   * Top list widget scaling definition.
   */
  "scaling"?: ToplistWidgetScaling;
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
    display: {
      baseName: "display",
      type: "ToplistWidgetDisplay",
    },
    palette: {
      baseName: "palette",
      type: "string",
    },
    scaling: {
      baseName: "scaling",
      type: "ToplistWidgetScaling",
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
    return ToplistWidgetStyle.attributeTypeMap;
  }

  public constructor() {}
}
