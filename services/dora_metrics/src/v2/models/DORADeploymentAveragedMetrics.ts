import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Averaged DORA and delivery metrics computed across the commits and pull requests included in the deployment.
 */
export class DORADeploymentAveragedMetrics {
  /**
   * The averaged change lead time, in seconds.
   */
  "changeLeadTime"?: number;
  /**
   * The averaged merge time, in seconds.
   */
  "mergeTime"?: number;
  /**
   * The averaged review time, in seconds.
   */
  "reviewTime"?: number;
  /**
   * The averaged time to deploy, in seconds.
   */
  "timeToDeploy"?: number;
  /**
   * The averaged time until the pull request was ready for review, in seconds.
   */
  "timeToPrReady"?: number;
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
    changeLeadTime: {
      baseName: "change_lead_time",
      type: "number",
      format: "int64",
    },
    mergeTime: {
      baseName: "merge_time",
      type: "number",
      format: "int64",
    },
    reviewTime: {
      baseName: "review_time",
      type: "number",
      format: "int64",
    },
    timeToDeploy: {
      baseName: "time_to_deploy",
      type: "number",
      format: "int64",
    },
    timeToPrReady: {
      baseName: "time_to_pr_ready",
      type: "number",
      format: "int64",
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
    return DORADeploymentAveragedMetrics.attributeTypeMap;
  }

  public constructor() {}
}
