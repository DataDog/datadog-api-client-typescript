import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetRelationshipItem } from "./WidgetRelationshipItem";

/**
 * Relationships of the widget resource.
 */
export class WidgetRelationships {
  /**
   * A JSON:API relationship to a user.
   */
  "createdBy"?: WidgetRelationshipItem;
  /**
   * A JSON:API relationship to a user.
   */
  "modifiedBy"?: WidgetRelationshipItem;
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
    createdBy: {
      baseName: "created_by",
      type: "WidgetRelationshipItem",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "WidgetRelationshipItem",
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
    return WidgetRelationships.attributeTypeMap;
  }

  public constructor() {}
}
