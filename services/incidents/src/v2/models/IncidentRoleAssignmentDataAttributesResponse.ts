import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of an incident role assignment.
 */
export class IncidentRoleAssignmentDataAttributesResponse {
  /**
   * Timestamp when the role assignment was created.
   */
  "created": Date;
  /**
   * Timestamp when the role assignment was last modified.
   */
  "modified": Date;
  /**
   * The type of the responder.
   */
  "responderType": string;
  /**
   * The name of the assigned role.
   */
  "role": string;
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
    created: {
      baseName: "created",
      type: "Date",
      required: true,
      format: "date-time",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      required: true,
      format: "date-time",
    },
    responderType: {
      baseName: "responder_type",
      type: "string",
      required: true,
    },
    role: {
      baseName: "role",
      type: "string",
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
    return IncidentRoleAssignmentDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
