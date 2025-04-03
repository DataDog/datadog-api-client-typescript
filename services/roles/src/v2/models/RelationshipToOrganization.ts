import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToOrganizationData } from "./RelationshipToOrganizationData";

/**
 * Relationship to an organization.
 */
export class RelationshipToOrganization {
  /**
   * Relationship to organization object.
   */
  "data": RelationshipToOrganizationData;
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
      type: "RelationshipToOrganizationData",
      required: true,
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
    return RelationshipToOrganization.attributeTypeMap;
  }

  public constructor() {}
}
