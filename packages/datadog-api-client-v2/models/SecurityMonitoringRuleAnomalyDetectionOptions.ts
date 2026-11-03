/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringRuleAnomalyDetectionOptionsBucketDuration } from "./SecurityMonitoringRuleAnomalyDetectionOptionsBucketDuration";
import { SecurityMonitoringRuleAnomalyDetectionOptionsDetectionTolerance } from "./SecurityMonitoringRuleAnomalyDetectionOptionsDetectionTolerance";
import { SecurityMonitoringRuleAnomalyDetectionOptionsLearningDuration } from "./SecurityMonitoringRuleAnomalyDetectionOptionsLearningDuration";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * When set to true, Datadog uses previous values that fall within the defined learning window to construct the baseline, enabling the system to establish an accurate baseline more rapidly rather than relying solely on gradual learning over time.
   */
  "instantaneousBaseline"?: boolean;
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
    },
    detectionTolerance: {
      baseName: "detectionTolerance",
      type: "SecurityMonitoringRuleAnomalyDetectionOptionsDetectionTolerance",
    },
    instantaneousBaseline: {
      baseName: "instantaneousBaseline",
      type: "boolean",
    },
    learningDuration: {
      baseName: "learningDuration",
      type: "SecurityMonitoringRuleAnomalyDetectionOptionsLearningDuration",
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
