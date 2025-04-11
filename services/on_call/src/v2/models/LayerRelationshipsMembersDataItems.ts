import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LayerRelationshipsMembersDataItemsType } from "./LayerRelationshipsMembersDataItemsType";

/**
 * Represents a single member object in a layer's `members` array, referencing
 * a unique Datadog user ID.
 */
export class LayerRelationshipsMembersDataItems {
  /**
   * The unique user ID of the layer member.
   */
  "id"?: string;
  /**
   * Members resource type.
   */
  "type"?: LayerRelationshipsMembersDataItemsType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "LayerRelationshipsMembersDataItemsType",
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
    return LayerRelationshipsMembersDataItems.attributeTypeMap;
  }

  public constructor() {}
}
