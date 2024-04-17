/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringNotificationRuleSelectors } from "./SecurityMonitoringNotificationRuleSelectors";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a notification rule to be updated.
 */
export class SecurityMonitoringNotificationRuleUpdateAttributes {
  /**
   * Whether the notification rule is enabled.
   */
  "enabled": boolean;
  /**
   * The name of the notification rule.
   */
  "name": string;
  /**
   * Selectors describing the notification rule.
   */
  "selectors": SecurityMonitoringNotificationRuleSelectors;
  /**
   * Set of targets to notify.
   */
  "targets": Array<string>;
  /**
   * The version of the rule being updated.
   */
  "version": number;

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
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    selectors: {
      baseName: "selectors",
      type: "SecurityMonitoringNotificationRuleSelectors",
      required: true,
    },
    targets: {
      baseName: "targets",
      type: "Array<string>",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
      format: "int32",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringNotificationRuleUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
