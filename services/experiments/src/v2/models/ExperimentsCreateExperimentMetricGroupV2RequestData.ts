import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateExperimentMetricGroupV2RequestDataAttributes } from "./ExperimentsCreateExperimentMetricGroupV2RequestDataAttributes";
import { ExperimentsPatchExperimentMetricGroupV2RequestDataType } from "./ExperimentsPatchExperimentMetricGroupV2RequestDataType";

/**
 * Metric group resource to create on the experiment.
 */
export class ExperimentsCreateExperimentMetricGroupV2RequestData {
  /**
   * Name and metric selection for the new experiment metric group.
   */
  "attributes": ExperimentsCreateExperimentMetricGroupV2RequestDataAttributes;
  /**
   * Optional JSON:API resource identifier field.
   */
  "id"?: string;
  /**
   * Experiment metric groups resource type.
   */
  "type": ExperimentsPatchExperimentMetricGroupV2RequestDataType;
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
    attributes: {
      baseName: "attributes",
      type: "ExperimentsCreateExperimentMetricGroupV2RequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ExperimentsPatchExperimentMetricGroupV2RequestDataType",
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
    return ExperimentsCreateExperimentMetricGroupV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
