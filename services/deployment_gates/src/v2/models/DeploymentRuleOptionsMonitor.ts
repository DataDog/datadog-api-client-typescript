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
   * Monitors that match this query are evaluated.
   */
  "query": string;
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
    query: {
      baseName: "query",
      type: "string",
      required: true,
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
