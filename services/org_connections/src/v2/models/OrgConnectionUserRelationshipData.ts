import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgConnectionUserRelationshipDataType } from "./OrgConnectionUserRelationshipDataType";

/**
 * The data for a user relationship.
 */
export class OrgConnectionUserRelationshipData {
  /**
   * User UUID.
   */
  "id"?: string;
  /**
   * User name.
   */
  "name"?: string;
  /**
   * The type of the user relationship.
   */
  "type"?: OrgConnectionUserRelationshipDataType;
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
    },
    name: {
      baseName: "name",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "OrgConnectionUserRelationshipDataType",
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
    return OrgConnectionUserRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
