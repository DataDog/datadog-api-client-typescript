import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgRelationshipData } from "./OrgRelationshipData";

/**
 * Relationship to the current organization.
 */
export class ManagedOrgsRelationshipToOrg {
  /**
   * Reference to an organization resource.
   */
  "data": OrgRelationshipData;
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
      type: "OrgRelationshipData",
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
    return ManagedOrgsRelationshipToOrg.attributeTypeMap;
  }

  public constructor() {}
}
