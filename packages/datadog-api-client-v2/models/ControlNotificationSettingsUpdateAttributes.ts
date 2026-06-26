/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ControlNotificationEventSetting } from "./ControlNotificationEventSetting";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a governance control's notification settings that can be updated.
 */
export class ControlNotificationSettingsUpdateAttributes {
  /**
   * The notification settings for each supported event type on the control.
   */
  "eventSettings"?: Array<ControlNotificationEventSetting>;

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
    eventSettings: {
      baseName: "event_settings",
      type: "Array<ControlNotificationEventSetting>",
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
    return ControlNotificationSettingsUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
