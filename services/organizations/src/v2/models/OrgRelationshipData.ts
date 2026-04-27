import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgResourceType } from "./OrgResourceType";

/**
 * Reference to an organization resource.
 */
export class OrgRelationshipData {
  /**
   * The UUID of the organization.
   */
  "id": string;
  /**
   * The resource type for organizations.
   */
  "type": OrgResourceType;
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
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "OrgResourceType",
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
    return OrgRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
