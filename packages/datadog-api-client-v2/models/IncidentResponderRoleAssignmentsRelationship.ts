/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentResponderRoleAssignmentRelationshipData } from "./IncidentResponderRoleAssignmentRelationshipData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to role assignments for a responder.
 */
export class IncidentResponderRoleAssignmentsRelationship {
  /**
   * List of role assignment relationship data.
   */
  "data"?: Array<IncidentResponderRoleAssignmentRelationshipData>;

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
      type: "Array<IncidentResponderRoleAssignmentRelationshipData>",
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
    return IncidentResponderRoleAssignmentsRelationship.attributeTypeMap;
  }

  public constructor() {}
}
