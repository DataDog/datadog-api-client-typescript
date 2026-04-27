import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgRelationshipData } from "./OrgRelationshipData";

/**
 * Relationship to the managed organizations.
 */
export class ManagedOrgsRelationshipToOrgs {
  /**
   * List of managed organization references.
   */
  "data": Array<OrgRelationshipData>;
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
      type: "Array<OrgRelationshipData>",
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
    return ManagedOrgsRelationshipToOrgs.attributeTypeMap;
  }

  public constructor() {}
}
