import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ControlNotificationTarget } from "./ControlNotificationTarget";

/**
 * The notification settings for a single event type on a control.
 */
export class ControlNotificationEventSetting {
  /**
   * Whether notifications are enabled for this event type.
   */
  "enabled": boolean;
  /**
   * The event type the notification settings apply to, such as `new_detection`.
   */
  "eventType": string;
  /**
   * The destinations that receive notifications for an event type.
   */
  "targets": Array<ControlNotificationTarget>;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    eventType: {
      baseName: "event_type",
      type: "string",
      required: true,
    },
    targets: {
      baseName: "targets",
      type: "Array<ControlNotificationTarget>",
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
    return ControlNotificationEventSetting.attributeTypeMap;
  }

  public constructor() {}
}
