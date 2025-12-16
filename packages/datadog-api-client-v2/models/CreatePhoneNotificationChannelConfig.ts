/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotificationChannelPhoneConfigType } from "./NotificationChannelPhoneConfigType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration to create a phone notification channel
 */
export class CreatePhoneNotificationChannelConfig {
  /**
   * The E-164 formatted phone number (e.g. +3371234567)
   */
  "number": string;
  /**
   * Indicates that the notification channel is a phone
   */
  "type": NotificationChannelPhoneConfigType;

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
    number: {
      baseName: "number",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NotificationChannelPhoneConfigType",
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
    return CreatePhoneNotificationChannelConfig.attributeTypeMap;
  }

  public constructor() {}
}
