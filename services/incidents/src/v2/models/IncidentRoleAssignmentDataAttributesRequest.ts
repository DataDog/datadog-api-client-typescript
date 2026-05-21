import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating a role assignment.
 */
export class IncidentRoleAssignmentDataAttributesRequest {
  /**
   * The name of the role to assign.
   */
  "role"?: string;
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
      type: "string",
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
    return IncidentRoleAssignmentDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
