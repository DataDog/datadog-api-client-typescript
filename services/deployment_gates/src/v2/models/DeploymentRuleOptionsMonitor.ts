import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Monitor options for deployment rules.
 */
export class DeploymentRuleOptionsMonitor {
  /**
   * Seconds the monitor needs to stay in OK status for the rule to pass.
   */
  "duration"?: number;
  /**
   * Whether the rule should fail if a matching monitor group is in a NO DATA state.
   */
  "failOnNoData"?: boolean;
  /**
   * Whether the rule should fail if no monitor groups are found for the query.
   */
  "failOnNoGroupsFound"?: boolean;
  /**
   * Monitors that match this query are evaluated.
   */
  "query": string;
  /**
   * Seconds to wait after a deployment starts before evaluating the monitor's status.
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
    query: {
      baseName: "query",
      type: "string",
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
    return DeploymentRuleOptionsMonitor.attributeTypeMap;
  }

  public constructor() {}
}
