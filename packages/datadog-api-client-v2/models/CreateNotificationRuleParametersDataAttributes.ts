/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Selectors } from "./Selectors";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the notification rule create request.
 */
export class CreateNotificationRuleParametersDataAttributes {
  /**
   * Field used to enable or disable the rule.
   */
  "enabled"?: boolean;
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
    return CreateNotificationRuleParametersDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
