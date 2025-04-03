import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PowerpackInnerWidgetLayout } from "./PowerpackInnerWidgetLayout";

/**
 * Powerpack group widget definition of individual widgets.
 */
export class PowerpackInnerWidgets {
  /**
   * Information about widget.
   */
  "definition": any;
  /**
   * Powerpack inner widget layout.
   */
  "layout"?: PowerpackInnerWidgetLayout;
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
    definition: {
      baseName: "definition",
      type: "any",
      required: true,
    },
    layout: {
      baseName: "layout",
      type: "PowerpackInnerWidgetLayout",
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
    return PowerpackInnerWidgets.attributeTypeMap;
  }

  public constructor() {}
}
