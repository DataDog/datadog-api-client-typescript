import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateOrUpdateWidgetRequestAttributes } from "./CreateOrUpdateWidgetRequestAttributes";

/**
 * Data for creating or updating a widget.
 */
export class CreateOrUpdateWidgetRequestData {
  /**
   * Attributes for creating or updating a widget.
   */
  "attributes": CreateOrUpdateWidgetRequestAttributes;
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
      type: "CreateOrUpdateWidgetRequestAttributes",
      required: true,
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
    return CreateOrUpdateWidgetRequestData.attributeTypeMap;
  }

  public constructor() {}
}
