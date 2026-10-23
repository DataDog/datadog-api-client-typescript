/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Complete lock map. Omit this object to preserve current locks. Null is rejected; every field is required.
 */
export class ExperimentsReplaceProtocolEnforcementInput {
  /**
   * Always LOCKED. The server keeps this setting locked regardless of the supplied value.
   */
  "confidenceIntervalMethod": string;
  /**
   * LOCKED prevents changes to confidence level. EDITABLE permits changes.
   */
  "confidenceLevel": string;
  /**
   * LOCKED prevents changes to CUPED variance reduction. EDITABLE permits changes.
   */
  "cupedCalculation": string;
  /**
   * LOCKED prevents changes to default duration. EDITABLE permits changes.
   */
  "defaultDuration": string;
  /**
   * LOCKED prevents changes to environment. EDITABLE permits changes.
   */
  "environment": string;
  /**
   * Always LOCKED. The server keeps this setting locked regardless of the supplied value.
   */
  "flagSource": string;
  /**
   * LOCKED prevents changes to multiple testing correction. EDITABLE permits changes.
   */
  "multipleTestingCorrection": string;
  /**
   * LOCKED prevents changes to notifications. EDITABLE permits changes.
   */
  "notifications": string;
  /**
   * LOCKED prevents changes to primary metric. EDITABLE permits changes.
   */
  "primaryMetric": string;
  /**
   * LOCKED prevents changes to secondary metrics. EDITABLE permits changes.
   */
  "secondaryMetrics": string;
  /**
   * LOCKED prevents changes to result exploration dimensions. EDITABLE permits changes.
   */
  "splitByExplorationDimensions": string;
  /**
   * Always LOCKED. The server keeps this setting locked regardless of the supplied value.
   */
  "subjectType": string;
  /**
   * LOCKED prevents changes to targeting rules. EDITABLE permits changes.
   */
  "targetingRules": string;
  /**
   * LOCKED prevents changes to traffic exposure. EDITABLE permits changes.
   */
  "trafficExposure": string;
  /**
   * LOCKED prevents changes to warehouse exposure source. EDITABLE permits changes.
   */
  "warehouseExposureSource": string;

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
      required: true,
    },
    confidenceLevel: {
      baseName: "confidence_level",
      type: "string",
      required: true,
    },
    cupedCalculation: {
      baseName: "cuped_calculation",
      type: "string",
      required: true,
    },
    defaultDuration: {
      baseName: "default_duration",
      type: "string",
      required: true,
    },
    environment: {
      baseName: "environment",
      type: "string",
      required: true,
    },
    flagSource: {
      baseName: "flag_source",
      type: "string",
      required: true,
    },
    multipleTestingCorrection: {
      baseName: "multiple_testing_correction",
      type: "string",
      required: true,
    },
    notifications: {
      baseName: "notifications",
      type: "string",
      required: true,
    },
    primaryMetric: {
      baseName: "primary_metric",
      type: "string",
      required: true,
    },
    secondaryMetrics: {
      baseName: "secondary_metrics",
      type: "string",
      required: true,
    },
    splitByExplorationDimensions: {
      baseName: "split_by_exploration_dimensions",
      type: "string",
      required: true,
    },
    subjectType: {
      baseName: "subject_type",
      type: "string",
      required: true,
    },
    targetingRules: {
      baseName: "targeting_rules",
      type: "string",
      required: true,
    },
    trafficExposure: {
      baseName: "traffic_exposure",
      type: "string",
      required: true,
    },
    warehouseExposureSource: {
      baseName: "warehouse_exposure_source",
      type: "string",
      required: true,
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
    return ExperimentsReplaceProtocolEnforcementInput.attributeTypeMap;
  }

  public constructor() {}
}
