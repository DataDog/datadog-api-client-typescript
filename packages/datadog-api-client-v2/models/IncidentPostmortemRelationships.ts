/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NullableRelationshipToUser } from "./NullableRelationshipToUser";
import { RelationshipToIncident } from "./RelationshipToIncident";
import { RelationshipToIncidentResponder } from "./RelationshipToIncidentResponder";
import { RelationshipToUser } from "./RelationshipToUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The postmortem's relationships.
 */
export class IncidentPostmortemRelationships {
  /**
   * Relationship to incident.
   */
  "incident"?: RelationshipToIncident;
  /**
   * Relationship to user.
   */
  "lastModifiedByUser"?: RelationshipToUser;
  /**
   * A relationship reference for a single incident responder.
   */
  "postmortemOwnerResponder"?: RelationshipToIncidentResponder;
  /**
   * Relationship to user.
   */
  "postmortemOwnerUser"?: NullableRelationshipToUser;

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
    incident: {
      baseName: "incident",
      type: "RelationshipToIncident",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "RelationshipToUser",
    },
    postmortemOwnerResponder: {
      baseName: "postmortem_owner_responder",
      type: "RelationshipToIncidentResponder",
    },
    postmortemOwnerUser: {
      baseName: "postmortem_owner_user",
      type: "NullableRelationshipToUser",
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
    return IncidentPostmortemRelationships.attributeTypeMap;
  }

  public constructor() {}
}
