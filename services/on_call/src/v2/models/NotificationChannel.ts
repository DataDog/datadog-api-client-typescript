import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotificationChannelData } from "./NotificationChannelData";

/**
 * A top-level wrapper for a user notification channel
 */
export class NotificationChannel {
  /**
   * Data for an on-call notification channel
   */
  "data"?: NotificationChannelData;
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
    data: {
      baseName: "data",
      type: "NotificationChannelData",
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
    return NotificationChannel.attributeTypeMap;
  }

  public constructor() {}
}
