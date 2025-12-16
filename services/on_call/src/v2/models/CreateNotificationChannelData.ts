import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateNotificationChannelAttributes } from "./CreateNotificationChannelAttributes";
import { NotificationChannelType } from "./NotificationChannelType";

/**
 * Data for creating an on-call notification channel
 */
export class CreateNotificationChannelData {
  /**
   * Attributes for creating an on-call notification channel.
   */
  "attributes"?: CreateNotificationChannelAttributes;
  /**
   * Indicates that the resource is of type 'notification_channels'.
   */
  "type": NotificationChannelType;
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
      type: "CreateNotificationChannelAttributes",
    },
    type: {
      baseName: "type",
      type: "NotificationChannelType",
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
    return CreateNotificationChannelData.attributeTypeMap;
  }

  public constructor() {}
}
