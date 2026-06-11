import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrganizationsType } from "./OrganizationsType";

/**
 * Relationship to organization object.
 */
export class RelationshipToOrganizationData {
  /**
   * ID of the organization.
   */
  "id": string;
  /**
   * Organizations resource type.
   */
  "type": OrganizationsType;
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
      required: true,
    },
    type: {
      baseName: "type",
      type: "OrganizationsType",
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
    return RelationshipToOrganizationData.attributeTypeMap;
  }

  public constructor() {}
}
