/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventEmailAddressAlertType } from "./EventEmailAddressAlertType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
