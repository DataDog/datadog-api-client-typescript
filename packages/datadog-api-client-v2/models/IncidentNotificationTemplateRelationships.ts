/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToIncidentType } from "./RelationshipToIncidentType";
import { RelationshipToUser } from "./RelationshipToUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The notification template's resource relationships.
 */
export class IncidentNotificationTemplateRelationships {
  /**
   * Relationship to user.
   */
  "createdByUser"?: RelationshipToUser;
  /**
   * Relationship to an incident type.
   */
  "incidentType"?: RelationshipToIncidentType;
  /**
   * Relationship to user.
   */
  "lastModifiedByUser"?: RelationshipToUser;

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
      type: "RelationshipToUser",
    },
    incidentType: {
      baseName: "incident_type",
      type: "RelationshipToIncidentType",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "RelationshipToUser",
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
    return IncidentNotificationTemplateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
