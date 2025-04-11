import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration options for what is shown in an alert event message.
 */
export class SlackIntegrationChannelDisplay {
  /**
   * Show the main body of the alert event.
   */
  "message"?: boolean;
  /**
   * Show interactive buttons to mute the alerting monitor.
   */
  "muteButtons"?: boolean;
  /**
   * Show the list of @-handles in the alert event.
   */
  "notified"?: boolean;
  /**
   * Show the alert event's snapshot image.
   */
  "snapshot"?: boolean;
  /**
   * Show the scopes on which the monitor alerted.
   */
  "tags"?: boolean;
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
    message: {
      baseName: "message",
      type: "boolean",
    },
    muteButtons: {
      baseName: "mute_buttons",
      type: "boolean",
    },
    notified: {
      baseName: "notified",
      type: "boolean",
    },
    snapshot: {
      baseName: "snapshot",
      type: "boolean",
    },
    tags: {
      baseName: "tags",
      type: "boolean",
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
    return SlackIntegrationChannelDisplay.attributeTypeMap;
  }

  public constructor() {}
}
