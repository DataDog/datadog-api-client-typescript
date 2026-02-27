import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventEmailAddressAlertType } from "./EventEmailAddressAlertType";

/**
 * Attributes for updating an event email address.
 */
export class EventEmailAddressUpdateAttributes {
  /**
   * The alert type of events generated from the email address.
   */
  "alertType"?: EventEmailAddressAlertType;
  /**
   * A description of the event email address.
   */
  "description"?: string;
  /**
   * A list of handles to notify when an email is received.
   */
  "notifyHandles"?: Array<string>;
  /**
   * A list of tags to apply to events generated from the email address.
   */
  "tags"?: Array<string>;
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
    alertType: {
      baseName: "alert_type",
      type: "EventEmailAddressAlertType",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    notifyHandles: {
      baseName: "notify_handles",
      type: "Array<string>",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return EventEmailAddressUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
