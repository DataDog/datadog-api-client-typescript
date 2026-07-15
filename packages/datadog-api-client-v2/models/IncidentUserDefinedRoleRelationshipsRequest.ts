/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentUserDefinedRoleIncidentTypeRelationship } from "./IncidentUserDefinedRoleIncidentTypeRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships for creating a user-defined role.
 */
export class IncidentUserDefinedRoleRelationshipsRequest {
  /**
   * Relationship to an incident type for a user-defined role.
   */
  "incidentType": IncidentUserDefinedRoleIncidentTypeRelationship;

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
    incidentType: {
      baseName: "incident_type",
      type: "IncidentUserDefinedRoleIncidentTypeRelationship",
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
    return IncidentUserDefinedRoleRelationshipsRequest.attributeTypeMap;
  }

  public constructor() {}
}
