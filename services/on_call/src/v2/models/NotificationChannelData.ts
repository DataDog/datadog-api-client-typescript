import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotificationChannelAttributes } from "./NotificationChannelAttributes";
import { NotificationChannelType } from "./NotificationChannelType";

/**
 * Data for an on-call notification channel
 */
export class NotificationChannelData {
  /**
   * Attributes for an on-call notification channel.
   */
  "attributes"?: NotificationChannelAttributes;
  /**
   * Unique identifier for the channel
   */
  "id"?: string;
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
      type: "NotificationChannelAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
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
    return NotificationChannelData.attributeTypeMap;
  }

  public constructor() {}
}
