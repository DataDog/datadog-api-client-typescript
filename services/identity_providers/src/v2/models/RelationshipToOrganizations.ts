import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToOrganizationData } from "./RelationshipToOrganizationData";

/**
 * Relationship to organizations.
 */
export class RelationshipToOrganizations {
  /**
   * Relationships to organization objects.
   */
  "data": Array<RelationshipToOrganizationData>;
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
      type: "Array<RelationshipToOrganizationData>",
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
    return RelationshipToOrganizations.attributeTypeMap;
  }

  public constructor() {}
}
