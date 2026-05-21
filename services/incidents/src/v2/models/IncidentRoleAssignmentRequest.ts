import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRoleAssignmentDataRequest } from "./IncidentRoleAssignmentDataRequest";

/**
 * Request to create a role assignment.
 */
export class IncidentRoleAssignmentRequest {
  /**
   * Role assignment data for a request.
   */
  "data": IncidentRoleAssignmentDataRequest;
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
      type: "IncidentRoleAssignmentDataRequest",
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
    return IncidentRoleAssignmentRequest.attributeTypeMap;
  }

  public constructor() {}
}
