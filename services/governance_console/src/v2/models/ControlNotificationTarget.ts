import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ControlNotificationTargetType } from "./ControlNotificationTargetType";

/**
 * A destination that receives notifications for an event type.
 */
export class ControlNotificationTarget {
  /**
   * The destination handle, such as an email address, Slack channel, or user handle.
   */
  "handle": string;
  /**
   * The type of notification destination.
   */
  "type": ControlNotificationTargetType;
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
      required: true,
    },
    type: {
      baseName: "type",
      type: "ControlNotificationTargetType",
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
    return ControlNotificationTarget.attributeTypeMap;
  }

  public constructor() {}
}
