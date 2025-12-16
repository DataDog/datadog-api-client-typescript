/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateNotificationChannelConfig } from "./CreateNotificationChannelConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating an on-call notification channel.
 */
export class CreateNotificationChannelAttributes {
  /**
   * Defines the configuration for creating an On-Call notification channel
   */
  "config"?: CreateNotificationChannelConfig;

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
    config: {
      baseName: "config",
      type: "CreateNotificationChannelConfig",
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
    return CreateNotificationChannelAttributes.attributeTypeMap;
  }

  public constructor() {}
}
