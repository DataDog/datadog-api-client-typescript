/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsExperimentMetricGroupMutationV2Data } from "./ExperimentsExperimentMetricGroupMutationV2Data";
import { ExperimentsPatchExperimentV2MetaDTO } from "./ExperimentsPatchExperimentV2MetaDTO";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the saved experiment metric group and result refresh information.
 */
export class ExperimentsExperimentMetricGroupMutationV2 {
  /**
   * Experiment metric group resource with its identifier and metric selection.
   */
  "data": ExperimentsExperimentMetricGroupMutationV2Data;
  /**
   * Refresh requirements and warnings returned by an experiment update.
   */
  "meta"?: ExperimentsPatchExperimentV2MetaDTO;

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
      type: "ExperimentsExperimentMetricGroupMutationV2Data",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ExperimentsPatchExperimentV2MetaDTO",
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
    return ExperimentsExperimentMetricGroupMutationV2.attributeTypeMap;
  }

  public constructor() {}
}
