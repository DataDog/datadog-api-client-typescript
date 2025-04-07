import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A notification triggered by the monitor.
 */
export class MonitorSearchResultNotification {
  /**
   * The email address that received the notification.
   */
  "handle"?: string;
  /**
   * The username receiving the notification
   */
  "name"?: string;
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
    handle: {
      baseName: "handle",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorSearchResultNotification.attributeTypeMap;
  }

  public constructor() {}
}
