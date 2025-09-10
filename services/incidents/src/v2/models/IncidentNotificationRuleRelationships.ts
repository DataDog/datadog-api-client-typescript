import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToIncidentNotificationTemplate } from "./RelationshipToIncidentNotificationTemplate";
import { RelationshipToIncidentType } from "./RelationshipToIncidentType";
import { RelationshipToUser } from "./RelationshipToUser";

/**
 * The notification rule's resource relationships.
 */
export class IncidentNotificationRuleRelationships {
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
   * A relationship reference to a notification template.
   */
  "notificationTemplate"?: RelationshipToIncidentNotificationTemplate;
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
    notificationTemplate: {
      baseName: "notification_template",
      type: "RelationshipToIncidentNotificationTemplate",
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
    return IncidentNotificationRuleRelationships.attributeTypeMap;
  }

  public constructor() {}
}
