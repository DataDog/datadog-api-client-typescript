import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentRoleAssignmentDataAttributesResponse } from "./IncidentRoleAssignmentDataAttributesResponse";
import { IncidentRoleAssignmentRelationshipsResponse } from "./IncidentRoleAssignmentRelationshipsResponse";
import { IncidentRoleAssignmentType } from "./IncidentRoleAssignmentType";

/**
 * Role assignment data in a response.
 */
export class IncidentRoleAssignmentDataResponse {
  /**
   * Attributes of an incident role assignment.
   */
  "attributes": IncidentRoleAssignmentDataAttributesResponse;
  /**
   * The role assignment identifier.
   */
  "id": string;
  /**
   * Relationships of a role assignment.
   */
  "relationships"?: IncidentRoleAssignmentRelationshipsResponse;
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
      type: "IncidentRoleAssignmentDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentRoleAssignmentRelationshipsResponse",
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
    return IncidentRoleAssignmentDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
