/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ControlNotificationSettingsUpdateData } from "./ControlNotificationSettingsUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A request to update the notification settings for a governance control.
 */
export class ControlNotificationSettingsUpdateRequest {
  /**
   * The data of a control notification settings update request.
   */
  "data": ControlNotificationSettingsUpdateData;

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
    data: {
      baseName: "data",
      type: "ControlNotificationSettingsUpdateData",
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
    return ControlNotificationSettingsUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
