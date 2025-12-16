/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotificationChannelPhoneConfigType } from "./NotificationChannelPhoneConfigType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Phone notification channel configuration
 */
export class NotificationChannelPhoneConfig {
  /**
   * The formatted international version of Number (e.g. +33 7 1 23 45 67).
   */
  "formattedNumber": string;
  /**
   * The E-164 formatted phone number (e.g. +3371234567)
   */
  "number": string;
  /**
   * The ISO 3166-1 alpha-2 two-letter country code.
   */
  "region": string;
  /**
   * If present, the date the user subscribed this number to SMS messages
   */
  "smsSubscribedAt"?: Date;
  /**
   * Indicates that the notification channel is a phone
   */
  "type": NotificationChannelPhoneConfigType;
  /**
   * Indicates whether this phone has been verified by the user in Datadog On-Call
   */
  "verified": boolean;

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
    formattedNumber: {
      baseName: "formatted_number",
      type: "string",
      required: true,
    },
    number: {
      baseName: "number",
      type: "string",
      required: true,
    },
    region: {
      baseName: "region",
      type: "string",
      required: true,
    },
    smsSubscribedAt: {
      baseName: "sms_subscribed_at",
      type: "Date",
      format: "date-time",
    },
    type: {
      baseName: "type",
      type: "NotificationChannelPhoneConfigType",
      required: true,
    },
    verified: {
      baseName: "verified",
      type: "boolean",
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
    return NotificationChannelPhoneConfig.attributeTypeMap;
  }

  public constructor() {}
}
