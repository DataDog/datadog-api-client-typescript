import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsExperimentMetricGroupMutationV2Data } from "./ExperimentsExperimentMetricGroupMutationV2Data";

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
