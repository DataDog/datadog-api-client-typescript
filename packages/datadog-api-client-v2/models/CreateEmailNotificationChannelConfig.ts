/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotificationChannelEmailConfigType } from "./NotificationChannelEmailConfigType";
import { NotificationChannelEmailFormatType } from "./NotificationChannelEmailFormatType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration to create an e-mail notification channel
 */
export class CreateEmailNotificationChannelConfig {
  /**
   * The e-mail address to be notified
   */
  "address": string;
  /**
   * Preferred content formats for notifications.
   */
  "formats": Array<NotificationChannelEmailFormatType>;
  /**
   * Indicates that the notification channel is an e-mail address
   */
  "type": NotificationChannelEmailConfigType;

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
    address: {
      baseName: "address",
      type: "string",
      required: true,
    },
    formats: {
      baseName: "formats",
      type: "Array<NotificationChannelEmailFormatType>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NotificationChannelEmailConfigType",
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
    return CreateEmailNotificationChannelConfig.attributeTypeMap;
  }

  public constructor() {}
}
