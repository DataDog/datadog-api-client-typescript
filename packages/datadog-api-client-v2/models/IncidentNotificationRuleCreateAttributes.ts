/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentNotificationRuleConditionsItems } from "./IncidentNotificationRuleConditionsItems";
import { IncidentNotificationRuleCreateAttributesVisibility } from "./IncidentNotificationRuleCreateAttributesVisibility";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes for creating a notification rule.
 */
export class IncidentNotificationRuleCreateAttributes {
  /**
   * The conditions that trigger this notification rule.
   */
  "conditions": Array<IncidentNotificationRuleConditionsItems>;
  /**
   * Whether the notification rule is enabled.
   */
  "enabled"?: boolean;
  /**
   * The notification handles (targets) for this rule.
   */
  "handles": Array<string>;
  /**
   * List of incident fields that trigger re-notification when changed.
   */
  "renotifyOn"?: Array<string>;
  /**
   * The trigger event for this notification rule.
   */
  "trigger": string;
  /**
   * The visibility of the notification rule.
   */
  "visibility"?: IncidentNotificationRuleCreateAttributesVisibility;

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
    conditions: {
      baseName: "conditions",
      type: "Array<IncidentNotificationRuleConditionsItems>",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    handles: {
      baseName: "handles",
      type: "Array<string>",
      required: true,
    },
    renotifyOn: {
      baseName: "renotify_on",
      type: "Array<string>",
    },
    trigger: {
      baseName: "trigger",
      type: "string",
      required: true,
    },
    visibility: {
      baseName: "visibility",
      type: "IncidentNotificationRuleCreateAttributesVisibility",
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
    return IncidentNotificationRuleCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
