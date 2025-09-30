import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * CI pipeline related statistics for the flaky test. This information is only available if test runs are associated with CI pipeline events from CI Visibility.
 */
export class FlakyTestPipelineStats {
  /**
   * The number of pipelines that failed due to this test for the past 7 days. This is computed as the sum of failed CI pipeline events associated with test runs where the flaky test failed.
   */
  "failedPipelines"?: number;
  /**
   * The total time lost by CI pipelines due to this flaky test in milliseconds. This is computed as the sum of the duration of failed CI pipeline events associated with test runs where the flaky test failed.
   */
  "totalLostTimeMs"?: number;
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
    failedPipelines: {
      baseName: "failed_pipelines",
      type: "number",
      format: "int64",
    },
    totalLostTimeMs: {
      baseName: "total_lost_time_ms",
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
    return FlakyTestPipelineStats.attributeTypeMap;
  }

  public constructor() {}
}
