import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ManagedOrgsRelationshipToOrg } from "./ManagedOrgsRelationshipToOrg";
import { ManagedOrgsRelationshipToOrgs } from "./ManagedOrgsRelationshipToOrgs";

/**
 * Relationships of the managed organizations resource.
 */
export class ManagedOrgsRelationships {
  /**
   * Relationship to the current organization.
   */
  "currentOrg": ManagedOrgsRelationshipToOrg;
  /**
   * Relationship to the managed organizations.
   */
  "managedOrgs": ManagedOrgsRelationshipToOrgs;
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
    currentOrg: {
      baseName: "current_org",
      type: "ManagedOrgsRelationshipToOrg",
      required: true,
    },
    managedOrgs: {
      baseName: "managed_orgs",
      type: "ManagedOrgsRelationshipToOrgs",
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
    return ManagedOrgsRelationships.attributeTypeMap;
  }

  public constructor() {}
}
