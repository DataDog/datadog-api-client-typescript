/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ControlNotificationSettingsAttributes } from "./ControlNotificationSettingsAttributes";
import { ControlNotificationSettingsResourceType } from "./ControlNotificationSettingsResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A control notification settings resource.
 */
export class ControlNotificationSettingsData {
  /**
   * The attributes of a governance control's notification settings.
   */
  "attributes": ControlNotificationSettingsAttributes;
  /**
   * The detection type the notification settings apply to.
   */
  "id": string;
  /**
   * Control notification settings resource type.
   */
  "type": ControlNotificationSettingsResourceType;

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
    attributes: {
      baseName: "attributes",
      type: "ControlNotificationSettingsAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ControlNotificationSettingsResourceType",
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
    return ControlNotificationSettingsData.attributeTypeMap;
  }

  public constructor() {}
}
