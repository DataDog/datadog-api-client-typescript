import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotificationChannelType } from "./NotificationChannelType";

/**
 * Channel relationship data for creating a notification rule
 */
export class OnCallNotificationRuleChannelRelationshipData {
  /**
   * ID of the notification channel
   */
  "id"?: string;
  /**
   * Indicates that the resource is of type 'notification_channels'.
   */
  "type"?: NotificationChannelType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "NotificationChannelType",
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
    return OnCallNotificationRuleChannelRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
