import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentNotificationRuleCreateAttributes } from "./IncidentNotificationRuleCreateAttributes";
import { IncidentNotificationRuleCreateDataRelationships } from "./IncidentNotificationRuleCreateDataRelationships";
import { IncidentNotificationRuleType } from "./IncidentNotificationRuleType";

/**
 * Notification rule data for an update request.
 */
export class IncidentNotificationRuleUpdateData {
  /**
   * The attributes for creating a notification rule.
   */
  "attributes": IncidentNotificationRuleCreateAttributes;
  /**
   * The unique identifier of the notification rule.
   */
  "id": string;
  /**
   * The definition of `NotificationRuleCreateDataRelationships` object.
   */
  "relationships"?: IncidentNotificationRuleCreateDataRelationships;
  /**
   * Notification rules resource type.
   */
  "type": IncidentNotificationRuleType;
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
      type: "IncidentNotificationRuleCreateAttributes",
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
      type: "IncidentNotificationRuleCreateDataRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentNotificationRuleType",
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
    return IncidentNotificationRuleUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
