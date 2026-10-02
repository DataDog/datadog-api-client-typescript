/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * One step in the protocol's traffic exposure schedule.
 */
export class ExperimentsPublicProtocolResponseDataAttributesExposureScheduleRolloutStepsItems {
  /**
   * Fraction of traffic exposed during this rollout step.
   */
  "exposureRatio"?: number;
  /**
   * Index of the group that contains this rollout step.
   */
  "groupedStepIndex"?: number;
  /**
   * Duration of this rollout step, in milliseconds.
   */
  "intervalMs"?: number;
  /**
   * Whether this schedule entry represents a pause.
   */
  "isPauseRecord"?: boolean;
  /**
   * Position of this entry in the ordered configuration.
   */
  "orderPosition"?: number;

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
    exposureRatio: {
      baseName: "exposure_ratio",
      type: "number",
      format: "double",
    },
    groupedStepIndex: {
      baseName: "grouped_step_index",
      type: "number",
      format: "int64",
    },
    intervalMs: {
      baseName: "interval_ms",
      type: "number",
      format: "int64",
    },
    isPauseRecord: {
      baseName: "is_pause_record",
      type: "boolean",
    },
    orderPosition: {
      baseName: "order_position",
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
    return ExperimentsPublicProtocolResponseDataAttributesExposureScheduleRolloutStepsItems.attributeTypeMap;
  }

  public constructor() {}
}
