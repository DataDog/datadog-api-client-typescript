/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsExperimentMetricGroupMutationV2Data } from "./ExperimentsExperimentMetricGroupMutationV2Data";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the metric groups for an experiment.
 */
export class ExperimentsExperimentMetricGroupV2DTOArray {
  /**
   * Metric groups associated with the experiment.
   */
  "data": Array<ExperimentsExperimentMetricGroupMutationV2Data>;

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
    data: {
      baseName: "data",
      type: "Array<ExperimentsExperimentMetricGroupMutationV2Data>",
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
    return ExperimentsExperimentMetricGroupV2DTOArray.attributeTypeMap;
  }

  public constructor() {}
}
