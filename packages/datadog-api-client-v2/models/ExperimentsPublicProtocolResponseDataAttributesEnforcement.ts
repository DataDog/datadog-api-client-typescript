/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Controls that determine which protocol settings can be changed in an experiment.
 */
export class ExperimentsPublicProtocolResponseDataAttributesEnforcement {
  /**
   * LOCKED prevents changes to confidence interval method. EDITABLE permits changes.
   */
  "confidenceIntervalMethod"?: string;
  /**
   * LOCKED prevents changes to confidence level. EDITABLE permits changes.
   */
  "confidenceLevel"?: string;
  /**
   * LOCKED prevents changes to CUPED variance reduction. EDITABLE permits changes.
   */
  "cupedCalculation"?: string;
  /**
   * LOCKED prevents changes to default duration. EDITABLE permits changes.
   */
  "defaultDuration"?: string;
  /**
   * LOCKED prevents changes to environment. EDITABLE permits changes.
   */
  "environment"?: string;
  /**
   * LOCKED prevents changes to feature flag source. EDITABLE permits changes.
   */
  "flagSource"?: string;
  /**
   * LOCKED prevents changes to multiple testing correction. EDITABLE permits changes.
   */
  "multipleTestingCorrection"?: string;
  /**
   * LOCKED prevents changes to notifications. EDITABLE permits changes.
   */
  "notifications"?: string;
  /**
   * LOCKED prevents changes to primary metric. EDITABLE permits changes.
   */
  "primaryMetric"?: string;
  /**
   * LOCKED prevents changes to secondary metrics. EDITABLE permits changes.
   */
  "secondaryMetrics"?: string;
  /**
   * LOCKED prevents changes to result exploration dimensions. EDITABLE permits changes.
   */
  "splitByExplorationDimensions"?: string;
  /**
   * LOCKED prevents changes to subject type. EDITABLE permits changes.
   */
  "subjectType"?: string;
  /**
   * LOCKED prevents changes to targeting rules. EDITABLE permits changes.
   */
  "targetingRules"?: string;
  /**
   * LOCKED prevents changes to traffic exposure. EDITABLE permits changes.
   */
  "trafficExposure"?: string;
  /**
   * LOCKED prevents changes to warehouse exposure source. EDITABLE permits changes.
   */
  "warehouseExposureSource"?: string;

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
    confidenceIntervalMethod: {
      baseName: "confidence_interval_method",
      type: "string",
    },
    confidenceLevel: {
      baseName: "confidence_level",
      type: "string",
    },
    cupedCalculation: {
      baseName: "cuped_calculation",
      type: "string",
    },
    defaultDuration: {
      baseName: "default_duration",
      type: "string",
    },
    environment: {
      baseName: "environment",
      type: "string",
    },
    flagSource: {
      baseName: "flag_source",
      type: "string",
    },
    multipleTestingCorrection: {
      baseName: "multiple_testing_correction",
      type: "string",
    },
    notifications: {
      baseName: "notifications",
      type: "string",
    },
    primaryMetric: {
      baseName: "primary_metric",
      type: "string",
    },
    secondaryMetrics: {
      baseName: "secondary_metrics",
      type: "string",
    },
    splitByExplorationDimensions: {
      baseName: "split_by_exploration_dimensions",
      type: "string",
    },
    subjectType: {
      baseName: "subject_type",
      type: "string",
    },
    targetingRules: {
      baseName: "targeting_rules",
      type: "string",
    },
    trafficExposure: {
      baseName: "traffic_exposure",
      type: "string",
    },
    warehouseExposureSource: {
      baseName: "warehouse_exposure_source",
      type: "string",
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
    return ExperimentsPublicProtocolResponseDataAttributesEnforcement.attributeTypeMap;
  }

  public constructor() {}
}
