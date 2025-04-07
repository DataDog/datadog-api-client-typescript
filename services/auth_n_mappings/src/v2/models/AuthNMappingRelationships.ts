import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToRole } from "./RelationshipToRole";
import { RelationshipToSAMLAssertionAttribute } from "./RelationshipToSAMLAssertionAttribute";
import { RelationshipToTeam } from "./RelationshipToTeam";

/**
 * All relationships associated with AuthN Mapping.
 */
export class AuthNMappingRelationships {
  /**
   * Relationship to role.
   */
  "role"?: RelationshipToRole;
  /**
   * AuthN Mapping relationship to SAML Assertion Attribute.
   */
  "samlAssertionAttribute"?: RelationshipToSAMLAssertionAttribute;
  /**
   * Relationship to team.
   */
  "team"?: RelationshipToTeam;
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
    role: {
      baseName: "role",
      type: "RelationshipToRole",
    },
    samlAssertionAttribute: {
      baseName: "saml_assertion_attribute",
      type: "RelationshipToSAMLAssertionAttribute",
    },
    team: {
      baseName: "team",
      type: "RelationshipToTeam",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuthNMappingRelationships.attributeTypeMap;
  }

  public constructor() {}
}
