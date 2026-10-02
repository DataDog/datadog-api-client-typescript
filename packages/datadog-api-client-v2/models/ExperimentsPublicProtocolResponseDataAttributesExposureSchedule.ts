/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsPublicProtocolResponseDataAttributesExposureScheduleRolloutStepsItems } from "./ExperimentsPublicProtocolResponseDataAttributesExposureScheduleRolloutStepsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Schedule that controls traffic exposure for experiments created from the protocol.
 */
export class ExperimentsPublicProtocolResponseDataAttributesExposureSchedule {
  /**
   * Whether the exposure schedule starts automatically.
   */
  "autostart"?: boolean;
  /**
   * Action taken when a guardrail triggers during the exposure schedule.
   */
  "guardrailTriggeredAction"?: string;
  /**
   * Ordered steps that define changes in traffic exposure.
   */
  "rolloutSteps"?: Array<ExperimentsPublicProtocolResponseDataAttributesExposureScheduleRolloutStepsItems>;
  /**
   * Interval between traffic selections, in milliseconds.
   */
  "selectionIntervalMs"?: number;
  /**
   * Method used to increase traffic exposure over the schedule.
   */
  "strategy"?: string;

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
    autostart: {
      baseName: "autostart",
      type: "boolean",
    },
    guardrailTriggeredAction: {
      baseName: "guardrail_triggered_action",
      type: "string",
    },
    rolloutSteps: {
      baseName: "rollout_steps",
      type: "Array<ExperimentsPublicProtocolResponseDataAttributesExposureScheduleRolloutStepsItems>",
    },
    selectionIntervalMs: {
      baseName: "selection_interval_ms",
      type: "number",
      format: "int64",
    },
    strategy: {
      baseName: "strategy",
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
    return ExperimentsPublicProtocolResponseDataAttributesExposureSchedule.attributeTypeMap;
  }

  public constructor() {}
}
