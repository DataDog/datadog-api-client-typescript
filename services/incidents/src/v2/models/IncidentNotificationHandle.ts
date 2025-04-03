import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A notification handle that will be notified at incident creation.
 */
export class IncidentNotificationHandle {
  /**
   * The name of the notified handle.
   */
  "displayName"?: string;
  /**
   * The handle used for the notification. This includes an email address, Slack channel, or workflow.
   */
  "handle"?: string;
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
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    handle: {
      baseName: "handle",
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
    return IncidentNotificationHandle.attributeTypeMap;
  }

  public constructor() {}
}
