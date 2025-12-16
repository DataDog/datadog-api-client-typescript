/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotificationChannelConfig } from "./NotificationChannelConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for an on-call notification channel.
 */
export class NotificationChannelAttributes {
  /**
   * Whether the notification channel is currently active.
   */
  "active"?: boolean;
  /**
   * Defines the configuration for an On-Call notification channel
   */
  "config"?: NotificationChannelConfig;

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
    active: {
      baseName: "active",
      type: "boolean",
    },
    config: {
      baseName: "config",
      type: "NotificationChannelConfig",
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
    return NotificationChannelAttributes.attributeTypeMap;
  }

  public constructor() {}
}
