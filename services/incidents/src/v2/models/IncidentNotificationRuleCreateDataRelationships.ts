import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToIncidentNotificationTemplate } from "./RelationshipToIncidentNotificationTemplate";
import { RelationshipToIncidentType } from "./RelationshipToIncidentType";

/**
 * The definition of `NotificationRuleCreateDataRelationships` object.
 */
export class IncidentNotificationRuleCreateDataRelationships {
  /**
   * Relationship to an incident type.
   */
  "incidentType"?: RelationshipToIncidentType;
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
    incidentType: {
      baseName: "incident_type",
      type: "RelationshipToIncidentType",
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
    return IncidentNotificationRuleCreateDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
