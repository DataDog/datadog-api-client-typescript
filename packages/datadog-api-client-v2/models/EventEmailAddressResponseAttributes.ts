/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventEmailAddressAlertType } from "./EventEmailAddressAlertType";
import { EventEmailAddressFormat } from "./EventEmailAddressFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an event email address resource.
 */
export class EventEmailAddressResponseAttributes {
  /**
   * The alert type of events generated from the email address.
   */
  "alertType"?: EventEmailAddressAlertType;
  /**
   * The timestamp of when the event email address was created.
   */
  "createdAt": Date;
  /**
   * A description of the event email address.
   */
  "description"?: string;
  /**
   * The generated email address for ingesting events.
   */
  "email": string;
  /**
   * The format of events ingested through the email address.
   */
  "format": EventEmailAddressFormat;
  /**
   * The timestamp of when the event email address was last used.
   */
  "lastUsedAt"?: Date;
  /**
   * A list of handles to notify when an email is received.
   */
  "notifyHandles"?: Array<string>;
  /**
   * The timestamp of when the event email address was revoked.
   */
  "revokedAt"?: Date;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    email: {
      baseName: "email",
      type: "string",
      required: true,
    },
    format: {
      baseName: "format",
      type: "EventEmailAddressFormat",
      required: true,
    },
    lastUsedAt: {
      baseName: "last_used_at",
      type: "Date",
      format: "date-time",
    },
    notifyHandles: {
      baseName: "notify_handles",
      type: "Array<string>",
    },
    revokedAt: {
      baseName: "revoked_at",
      type: "Date",
      format: "date-time",
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
    return EventEmailAddressResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
