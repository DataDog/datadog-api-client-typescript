import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotificationChannelData } from "./NotificationChannelData";

/**
 * Response type for listing notification channels for a user
 */
export class ListNotificationChannelsResponse {
  "data"?: Array<NotificationChannelData>;
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
      type: "Array<NotificationChannelData>",
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
    return ListNotificationChannelsResponse.attributeTypeMap;
  }

  public constructor() {}
}
