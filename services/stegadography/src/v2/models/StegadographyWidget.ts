import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StegadographyWidgetAttributes } from "./StegadographyWidgetAttributes";
import { StegadographyWidgetType } from "./StegadographyWidgetType";

/**
 * A single watermarked widget resource recovered from an image.
 */
export class StegadographyWidget {
  /**
   * Attributes of a watermarked widget recovered from an image.
   */
  "attributes": StegadographyWidgetAttributes;
  /**
   * Composite identifier formed from the organization ID and watermark, separated by a colon.
   */
  "id": string;
  /**
   * Stegadography widget resource type.
   */
  "type": StegadographyWidgetType;
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
    attributes: {
      baseName: "attributes",
      type: "StegadographyWidgetAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StegadographyWidgetType",
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
    return StegadographyWidget.attributeTypeMap;
  }

  public constructor() {}
}
