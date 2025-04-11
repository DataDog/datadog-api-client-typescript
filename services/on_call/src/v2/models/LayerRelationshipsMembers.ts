import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LayerRelationshipsMembersDataItems } from "./LayerRelationshipsMembersDataItems";

/**
 * Holds an array of references to the members of a Layer, each containing member IDs.
 */
export class LayerRelationshipsMembers {
  /**
   * The list of members who belong to this layer.
   */
  "data"?: Array<LayerRelationshipsMembersDataItems>;
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
      type: "Array<LayerRelationshipsMembersDataItems>",
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
    return LayerRelationshipsMembers.attributeTypeMap;
  }

  public constructor() {}
}
