/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentUserDefinedRoleIncidentTypeRelationshipData } from "./IncidentUserDefinedRoleIncidentTypeRelationshipData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship to an incident type for a user-defined role.
 */
export class IncidentUserDefinedRoleIncidentTypeRelationship {
  /**
   * Data for the incident type relationship of a user-defined role.
   */
  "data": IncidentUserDefinedRoleIncidentTypeRelationshipData;

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
      type: "IncidentUserDefinedRoleIncidentTypeRelationshipData",
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
    return IncidentUserDefinedRoleIncidentTypeRelationship.attributeTypeMap;
  }

  public constructor() {}
}
