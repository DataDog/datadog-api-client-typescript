import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateNotificationChannelConfig } from "./CreateNotificationChannelConfig";

/**
 * Attributes for creating an on-call notification channel.
 */
export class CreateNotificationChannelAttributes {
  /**
   * Defines the configuration for creating an On-Call notification channel
   */
  "config"?: CreateNotificationChannelConfig;
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
    config: {
      baseName: "config",
      type: "CreateNotificationChannelConfig",
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
    return CreateNotificationChannelAttributes.attributeTypeMap;
  }

  public constructor() {}
}
