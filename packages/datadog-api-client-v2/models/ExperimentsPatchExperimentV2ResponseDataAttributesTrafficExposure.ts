/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCreateExperimentV2RequestDataAttributesTrafficExposureMode } from "./ExperimentsCreateExperimentV2RequestDataAttributesTrafficExposureMode";
import { ExperimentsCreateExperimentV2RequestDataAttributesTrafficExposureStepsItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesTrafficExposureStepsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Traffic exposure fraction or schedule configured for the experiment.
 */
export class ExperimentsPatchExperimentV2ResponseDataAttributesTrafficExposure {
  /**
   * STATIC exposure fraction. Draft experiments can change this value. After start only warehouse experiments without a Datadog flag can change a STATIC fraction through the public API.
   */
  "fraction"?: number;
  /**
   * Whether exposure uses a fixed fraction or a sequence of steps.
   */
  "mode": ExperimentsCreateExperimentV2RequestDataAttributesTrafficExposureMode;
  /**
   * Configured exposure plan rather than wall-clock history. At least two steps must have strictly increasing fractions and no gaps. Warehouse steps start at assignments_start_date and can use different durations. New Datadog plans have at most five steps and a first fraction above zero. Their nonfinal durations must be equal and exclude time paused. Datadog steps start with the experiment. Running warehouse experiments can replace step fractions, durations, and the exposure mode. After start, Datadog exposure plans cannot change through the public API. The final duration is null and its fraction holds until assignment ends.
   */
  "steps"?: Array<ExperimentsCreateExperimentV2RequestDataAttributesTrafficExposureStepsItems>;

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
    fraction: {
      baseName: "fraction",
      type: "number",
      format: "double",
    },
    mode: {
      baseName: "mode",
      type: "ExperimentsCreateExperimentV2RequestDataAttributesTrafficExposureMode",
      required: true,
    },
    steps: {
      baseName: "steps",
      type: "Array<ExperimentsCreateExperimentV2RequestDataAttributesTrafficExposureStepsItems>",
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
    return ExperimentsPatchExperimentV2ResponseDataAttributesTrafficExposure.attributeTypeMap;
  }

  public constructor() {}
}
