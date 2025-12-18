/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotificationChannelPhoneConfigType } from "./NotificationChannelPhoneConfigType";
import { OnCallPhoneNotificationRuleMethod } from "./OnCallPhoneNotificationRuleMethod";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration for using a phone notification channel in a notification rule
 */
export class OnCallPhoneNotificationRuleSettings {
  /**
   * Specifies the method in which a phone is used in a notification rule
   */
  "method": OnCallPhoneNotificationRuleMethod;
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
    method: {
      baseName: "method",
      type: "OnCallPhoneNotificationRuleMethod",
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
    return OnCallPhoneNotificationRuleSettings.attributeTypeMap;
  }

  public constructor() {}
}
