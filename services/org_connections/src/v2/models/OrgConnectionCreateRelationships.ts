import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgConnectionOrgRelationship } from "./OrgConnectionOrgRelationship";

/**
 * Relationships for org connection creation.
 */
export class OrgConnectionCreateRelationships {
  /**
   * Org relationship.
   */
  "sinkOrg": OrgConnectionOrgRelationship;
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
    sinkOrg: {
      baseName: "sink_org",
      type: "OrgConnectionOrgRelationship",
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
    return OrgConnectionCreateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
