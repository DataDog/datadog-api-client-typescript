import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringRuleAnomalyDetectionOptionsBucketDuration } from "./SecurityMonitoringRuleAnomalyDetectionOptionsBucketDuration";
import { SecurityMonitoringRuleAnomalyDetectionOptionsDetectionTolerance } from "./SecurityMonitoringRuleAnomalyDetectionOptionsDetectionTolerance";
import { SecurityMonitoringRuleAnomalyDetectionOptionsLearningDuration } from "./SecurityMonitoringRuleAnomalyDetectionOptionsLearningDuration";

/**
 * Options on anomaly detection method.
 */
export class SecurityMonitoringRuleAnomalyDetectionOptions {
  /**
   * Duration in seconds of the time buckets used to aggregate events matched by the rule.
   * Must be greater than or equal to 300.
   */
  "bucketDuration"?: SecurityMonitoringRuleAnomalyDetectionOptionsBucketDuration;
  /**
   * An optional parameter that sets how permissive anomaly detection is.
   * Higher values require higher deviations before triggering a signal.
   */
  "detectionTolerance"?: SecurityMonitoringRuleAnomalyDetectionOptionsDetectionTolerance;
  /**
   * Learning duration in hours. Anomaly detection waits for at least this amount of historical data before it starts evaluating.
   */
  "learningDuration"?: SecurityMonitoringRuleAnomalyDetectionOptionsLearningDuration;
  /**
   * An optional override baseline to apply while the rule is in the learning period. Must be greater than or equal to 0.
   */
  "learningPeriodBaseline"?: number;
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
    bucketDuration: {
      baseName: "bucketDuration",
      type: "SecurityMonitoringRuleAnomalyDetectionOptionsBucketDuration",
      format: "int32",
    },
    detectionTolerance: {
      baseName: "detectionTolerance",
      type: "SecurityMonitoringRuleAnomalyDetectionOptionsDetectionTolerance",
      format: "int32",
    },
    learningDuration: {
      baseName: "learningDuration",
      type: "SecurityMonitoringRuleAnomalyDetectionOptionsLearningDuration",
      format: "int32",
    },
    learningPeriodBaseline: {
      baseName: "learningPeriodBaseline",
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
    return SecurityMonitoringRuleAnomalyDetectionOptions.attributeTypeMap;
  }

  public constructor() {}
}
