import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgConnectionOrgRelationshipDataType } from "./OrgConnectionOrgRelationshipDataType";

/**
 * The definition of `OrgConnectionOrgRelationshipData` object.
 */
export class OrgConnectionOrgRelationshipData {
  /**
   * Org UUID.
   */
  "id"?: string;
  /**
   * Org name.
   */
  "name"?: string;
  /**
   * The type of the organization relationship.
   */
  "type"?: OrgConnectionOrgRelationshipDataType;
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
    name: {
      baseName: "name",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "OrgConnectionOrgRelationshipDataType",
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
    return OrgConnectionOrgRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
