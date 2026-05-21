import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRoleAssignmentDataAttributesRequest } from "./IncidentRoleAssignmentDataAttributesRequest";
import { IncidentRoleAssignmentRelationshipsRequest } from "./IncidentRoleAssignmentRelationshipsRequest";
import { IncidentRoleAssignmentType } from "./IncidentRoleAssignmentType";

/**
 * Role assignment data for a request.
 */
export class IncidentRoleAssignmentDataRequest {
  /**
   * Attributes for creating a role assignment.
   */
  "attributes"?: IncidentRoleAssignmentDataAttributesRequest;
  /**
   * Relationships for creating a role assignment.
   */
  "relationships": IncidentRoleAssignmentRelationshipsRequest;
  /**
   * Incident role assignment resource type.
   */
  "type": IncidentRoleAssignmentType;
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
    attributes: {
      baseName: "attributes",
      type: "IncidentRoleAssignmentDataAttributesRequest",
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentRoleAssignmentRelationshipsRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentRoleAssignmentType",
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
    return IncidentRoleAssignmentDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
