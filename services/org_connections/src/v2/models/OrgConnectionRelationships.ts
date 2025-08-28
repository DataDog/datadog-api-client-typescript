import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgConnectionOrgRelationship } from "./OrgConnectionOrgRelationship";
import { OrgConnectionUserRelationship } from "./OrgConnectionUserRelationship";

/**
 * Related organizations and user.
 */
export class OrgConnectionRelationships {
  /**
   * User relationship.
   */
  "createdBy"?: OrgConnectionUserRelationship;
  /**
   * Org relationship.
   */
  "sinkOrg"?: OrgConnectionOrgRelationship;
  /**
   * Org relationship.
   */
  "sourceOrg"?: OrgConnectionOrgRelationship;
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
      type: "OrgConnectionUserRelationship",
    },
    sinkOrg: {
      baseName: "sink_org",
      type: "OrgConnectionOrgRelationship",
    },
    sourceOrg: {
      baseName: "source_org",
      type: "OrgConnectionOrgRelationship",
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
    return OrgConnectionRelationships.attributeTypeMap;
  }

  public constructor() {}
}
