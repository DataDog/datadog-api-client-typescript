/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentRoleAssignmentResponderRelationship } from "./IncidentRoleAssignmentResponderRelationship";
import { IncidentRoleAssignmentRoleRelationship } from "./IncidentRoleAssignmentRoleRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships of a role assignment.
 */
export class IncidentRoleAssignmentRelationshipsResponse {
  /**
   * Relationship to a responder.
   */
  "createdByUser"?: IncidentRoleAssignmentResponderRelationship;
  /**
   * Relationship to a responder.
   */
  "lastModifiedByUser"?: IncidentRoleAssignmentResponderRelationship;
  /**
   * Relationship to a role.
   */
  "reservedRole"?: IncidentRoleAssignmentRoleRelationship;
  /**
   * Relationship to a responder.
   */
  "responder": IncidentRoleAssignmentResponderRelationship;
  /**
   * Relationship to a role.
   */
  "userDefinedRole"?: IncidentRoleAssignmentRoleRelationship;

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
    createdByUser: {
      baseName: "created_by_user",
      type: "IncidentRoleAssignmentResponderRelationship",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "IncidentRoleAssignmentResponderRelationship",
    },
    reservedRole: {
      baseName: "reserved_role",
      type: "IncidentRoleAssignmentRoleRelationship",
    },
    responder: {
      baseName: "responder",
      type: "IncidentRoleAssignmentResponderRelationship",
      required: true,
    },
    userDefinedRole: {
      baseName: "user_defined_role",
      type: "IncidentRoleAssignmentRoleRelationship",
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
    return IncidentRoleAssignmentRelationshipsResponse.attributeTypeMap;
  }

  public constructor() {}
}
