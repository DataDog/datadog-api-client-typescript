import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StegadographyWidgetAttributes } from "./StegadographyWidgetAttributes";
import { StegadographyWidgetType } from "./StegadographyWidgetType";

/**
 * A single widget recovered from an image watermark.
 */
export class StegadographyWidgetData {
  /**
   * Attributes of a widget recovered from an image watermark.
   */
  "attributes": StegadographyWidgetAttributes;
  /**
   * Identifier of the cached widget, scoped to the organization.
   */
  "id": string;
  /**
   * Widget resource type.
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
    return StegadographyWidgetData.attributeTypeMap;
  }

  public constructor() {}
}
