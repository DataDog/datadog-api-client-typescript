import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Evaluated rule configuration. Fields depend on rule type and unset fields are omitted.
 * Monitor rules can include `duration`, `query`, `monitor_ids`, `warmup`, `fail_on_no_groups_found`, and `fail_on_no_data`.
 * Faulty deployment detection rules can include `duration`, `allowed_resources`, and `excluded_resources`.
 */
export class DeploymentGateRuleEvaluationConfiguration {
  /**
   * APM resources explicitly allowed by faulty deployment detection.
   */
  "allowedResources"?: Array<string>;
  /**
   * Evaluation duration configured for this rule.
   */
  "duration"?: number;
  /**
   * APM resources excluded from faulty deployment detection.
   */
  "excludedResources"?: Array<string>;
  /**
   * Whether a monitor rule fails when no data is found.
   */
  "failOnNoData"?: boolean;
  /**
   * Whether a monitor rule fails when no groups are found.
   */
  "failOnNoGroupsFound"?: boolean;
  /**
   * Monitor IDs evaluated by a monitor rule.
   */
  "monitorIds"?: Array<string>;
  /**
   * Monitor query used by a monitor rule.
   */
  "query"?: string;
  /**
   * Warm-up duration in seconds for a monitor rule. Omitted when zero.
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
    allowedResources: {
      baseName: "allowed_resources",
      type: "Array<string>",
    },
    duration: {
      baseName: "duration",
      type: "number",
      format: "int64",
    },
    excludedResources: {
      baseName: "excluded_resources",
      type: "Array<string>",
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
      type: "Array<string>",
    },
    query: {
      baseName: "query",
      type: "string",
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
    return DeploymentGateRuleEvaluationConfiguration.attributeTypeMap;
  }

  public constructor() {}
}
