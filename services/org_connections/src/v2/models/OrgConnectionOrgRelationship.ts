import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgConnectionOrgRelationshipData } from "./OrgConnectionOrgRelationshipData";

/**
 * Org relationship.
 */
export class OrgConnectionOrgRelationship {
  /**
   * The definition of `OrgConnectionOrgRelationshipData` object.
   */
  "data"?: OrgConnectionOrgRelationshipData;
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
      type: "OrgConnectionOrgRelationshipData",
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
    return OrgConnectionOrgRelationship.attributeTypeMap;
  }

  public constructor() {}
}
