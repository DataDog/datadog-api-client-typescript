import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRoleAssignmentDataResponse } from "./IncidentRoleAssignmentDataResponse";

/**
 * Response with a single role assignment.
 */
export class IncidentRoleAssignmentResponse {
  /**
   * Role assignment data in a response.
   */
  "data": IncidentRoleAssignmentDataResponse;
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
      type: "IncidentRoleAssignmentDataResponse",
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
    return IncidentRoleAssignmentResponse.attributeTypeMap;
  }

  public constructor() {}
}
