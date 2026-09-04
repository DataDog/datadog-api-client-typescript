import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentRuleOptionsMonitorId } from "./DeploymentRuleOptionsMonitorId";

/**
 * Specific monitor options for deployment rules.
 */
export class DeploymentRuleOptionsMonitorIds {
  /**
   * Seconds the monitors need to stay in OK status for the rule to pass.
   */
  "duration"?: number;
  /**
   * Whether the rule should fail if a selected monitor group is in a NO DATA state.
   */
  "failOnNoData"?: boolean;
  /**
   * Whether the rule should fail if no monitor groups are found for the selected monitors.
   */
  "failOnNoGroupsFound"?: boolean;
  /**
   * A non-empty list of specific monitors to evaluate.
   */
  "monitorIds": Array<DeploymentRuleOptionsMonitorId>;
  /**
   * Seconds to wait after a deployment starts before evaluating the monitors' statuses.
   */
  "warmup"?: number;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    duration: {
      baseName: "duration",
      type: "number",
      format: "int64",
    },
    failOnNoData: {
      baseName: "fail_on_no_data",
      type: "boolean",
    },
    failOnNoGroupsFound: {
      baseName: "fail_on_no_groups_found",
      type: "boolean",
    },
    monitorIds: {
      baseName: "monitor_ids",
      type: "Array<DeploymentRuleOptionsMonitorId>",
      required: true,
    },
    warmup: {
      baseName: "warmup",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DeploymentRuleOptionsMonitorIds.attributeTypeMap;
  }

  public constructor() {}
}
