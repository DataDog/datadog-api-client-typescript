/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringCreator } from "./SecurityMonitoringCreator";
import { SecurityMonitoringNotificationRuleSelectors } from "./SecurityMonitoringNotificationRuleSelectors";
import { SecurityMonitoringUpdater } from "./SecurityMonitoringUpdater";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the notification rule.
 */
export class SecurityMonitoringNotificationRuleResponseAttributes {
  /**
   * Timestamp of creation of the notification rule in milliseconds.
   */
  "creationDate"?: number;
  /**
   * The author of the notification rule.
   */
  "creator"?: SecurityMonitoringCreator;
  /**
   * Whether the notification rule is enabled.
   */
  "enabled"?: boolean;
  /**
   * The name of the notification rule.
   */
  "name"?: string;
  /**
   * Selectors describing the notification rule.
   */
  "selectors"?: SecurityMonitoringNotificationRuleSelectors;
  /**
   * Set of targets to notify.
   */
  "targets"?: Array<string>;
  /**
   * Timestamp of last modification of the notification rule in milliseconds.
   */
  "updateDate"?: number;
  /**
   * The editor of the notification rule.
   */
  "updater"?: SecurityMonitoringUpdater;
  /**
   * The version of the rule being updated.
   */
  "version"?: number;

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
    creationDate: {
      baseName: "creation_date",
      type: "number",
      format: "int64",
    },
    creator: {
      baseName: "creator",
      type: "SecurityMonitoringCreator",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    selectors: {
      baseName: "selectors",
      type: "SecurityMonitoringNotificationRuleSelectors",
    },
    targets: {
      baseName: "targets",
      type: "Array<string>",
    },
    updateDate: {
      baseName: "update_date",
      type: "number",
      format: "int64",
    },
    updater: {
      baseName: "updater",
      type: "SecurityMonitoringUpdater",
    },
    version: {
      baseName: "version",
      type: "number",
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
    return SecurityMonitoringNotificationRuleResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
