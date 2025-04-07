import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RuleUser } from "./RuleUser";
import { Selectors } from "./Selectors";

/**
 * Attributes of the notification rule.
 */
export class NotificationRuleAttributes {
  /**
   * Date as Unix timestamp in milliseconds.
   */
  "createdAt": number;
  /**
   * User creating or modifying a rule.
   */
  "createdBy": RuleUser;
  /**
   * Field used to enable or disable the rule.
   */
  "enabled": boolean;
  /**
   * Date as Unix timestamp in milliseconds.
   */
  "modifiedAt": number;
  /**
   * User creating or modifying a rule.
   */
  "modifiedBy": RuleUser;
  /**
   * Name of the notification rule.
   */
  "name": string;
  /**
   * Selectors are used to filter security issues for which notifications should be generated.
   * Users can specify rule severities, rule types, a query to filter security issues on tags and attributes, and the trigger source.
   * Only the trigger_source field is required.
   */
  "selectors": Selectors;
  /**
   * List of recipients to notify when a notification rule is triggered. Many different target types are supported,
   * such as email addresses, Slack channels, and PagerDuty services.
   * The appropriate integrations need to be properly configured to send notifications to the specified targets.
   */
  "targets": Array<string>;
  /**
   * Time aggregation period (in seconds) is used to aggregate the results of the notification rule evaluation.
   * Results are aggregated over a selected time frame using a rolling window, which updates with each new evaluation.
   * Notifications are only sent for new issues discovered during the window.
   * Time aggregation is only available for vulnerability-based notification rules. When omitted or set to 0, no aggregation
   * is done.
   */
  "timeAggregation"?: number;
  /**
   * Version of the notification rule. It is updated when the rule is modified.
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
    createdAt: {
      baseName: "created_at",
      type: "number",
      required: true,
      format: "int64",
    },
    createdBy: {
      baseName: "created_by",
      type: "RuleUser",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "number",
      required: true,
      format: "int64",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "RuleUser",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    selectors: {
      baseName: "selectors",
      type: "Selectors",
      required: true,
    },
    targets: {
      baseName: "targets",
      type: "Array<string>",
      required: true,
    },
    timeAggregation: {
      baseName: "time_aggregation",
      type: "number",
      format: "int64",
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
      format: "int64",
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
    return NotificationRuleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
