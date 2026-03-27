import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetRelationshipData } from "./WidgetRelationshipData";

/**
 * A JSON:API relationship to a user.
 */
export class WidgetRelationshipItem {
  /**
   * Relationship data referencing a user resource.
   */
  "data"?: WidgetRelationshipData;
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
    data: {
      baseName: "data",
      type: "WidgetRelationshipData",
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
    return WidgetRelationshipItem.attributeTypeMap;
  }

  public constructor() {}
}
