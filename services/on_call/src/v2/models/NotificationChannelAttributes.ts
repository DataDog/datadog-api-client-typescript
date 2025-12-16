import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotificationChannelConfig } from "./NotificationChannelConfig";

/**
 * Attributes for an on-call notification channel.
 */
export class NotificationChannelAttributes {
  /**
   * Whether the notification channel is currently active.
   */
  "active"?: boolean;
  /**
   * Defines the configuration for an On-Call notification channel
   */
  "config"?: NotificationChannelConfig;
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
    active: {
      baseName: "active",
      type: "boolean",
    },
    config: {
      baseName: "config",
      type: "NotificationChannelConfig",
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
    return NotificationChannelAttributes.attributeTypeMap;
  }

  public constructor() {}
}
