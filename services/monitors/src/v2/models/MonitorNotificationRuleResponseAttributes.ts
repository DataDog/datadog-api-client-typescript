import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorNotificationRuleFilter } from "./MonitorNotificationRuleFilter";

/**
 * Attributes of the monitor notification rule.
 */
export class MonitorNotificationRuleResponseAttributes {
  /**
   * Creation time of the monitor notification rule.
   */
  "created"?: Date;
  /**
   * Filter used to associate the notification rule with monitors.
   */
  "filter"?: MonitorNotificationRuleFilter;
  /**
   * Time the monitor notification rule was last modified.
   */
  "modified"?: Date;
  /**
   * The name of the monitor notification rule.
   */
  "name"?: string;
  /**
   * A list of recipients to notify. Uses the same format as the monitor `message` field. Must not start with an '@'.
   */
  "recipients"?: Array<string>;
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
    created: {
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
    filter: {
      baseName: "filter",
      type: "MonitorNotificationRuleFilter",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    recipients: {
      baseName: "recipients",
      type: "Array<string>",
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
    return MonitorNotificationRuleResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
