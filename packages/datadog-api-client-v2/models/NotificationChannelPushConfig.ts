/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotificationChannelPushConfigType } from "./NotificationChannelPushConfigType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Push notification channel configuration
 */
export class NotificationChannelPushConfig {
  /**
   * The name of the application used to receive push notifications
   */
  "applicationName": string;
  /**
   * The name of the mobile device being used
   */
  "deviceName": string;
  /**
   * Indicates that the notification channel is a mobile device for push notifications
   */
  "type": NotificationChannelPushConfigType;

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
    applicationName: {
      baseName: "application_name",
      type: "string",
      required: true,
    },
    deviceName: {
      baseName: "device_name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NotificationChannelPushConfigType",
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
    return NotificationChannelPushConfig.attributeTypeMap;
  }

  public constructor() {}
}
