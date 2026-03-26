import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetAttributes } from "./WidgetAttributes";
import { WidgetRelationships } from "./WidgetRelationships";

/**
 * A widget resource object.
 */
export class WidgetData {
  /**
   * Attributes of a widget resource.
   */
  "attributes": WidgetAttributes;
  /**
   * The unique identifier of the widget.
   */
  "id": string;
  /**
   * Relationships of the widget resource.
   */
  "relationships"?: WidgetRelationships;
  /**
   * Widgets resource type.
   */
  "type": string;
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
      type: "WidgetAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "WidgetRelationships",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return WidgetData.attributeTypeMap;
  }

  public constructor() {}
}
