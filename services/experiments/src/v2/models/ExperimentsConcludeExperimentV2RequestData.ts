import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsConcludeExperimentV2RequestDataAttributes } from "./ExperimentsConcludeExperimentV2RequestDataAttributes";
import { ExperimentsConcludeExperimentV2RequestDataType } from "./ExperimentsConcludeExperimentV2RequestDataType";

/**
 * Experiment conclusion resource with the experiment identifier and decision.
 */
export class ExperimentsConcludeExperimentV2RequestData {
  /**
   * Decision to record when concluding the experiment.
   */
  "attributes": ExperimentsConcludeExperimentV2RequestDataAttributes;
  /**
   * Identifier of the experiment to conclude.
   */
  "id"?: string;
  /**
   * Conclude experiment request resource type.
   */
  "type": ExperimentsConcludeExperimentV2RequestDataType;
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
      type: "ExperimentsConcludeExperimentV2RequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ExperimentsConcludeExperimentV2RequestDataType",
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
    return ExperimentsConcludeExperimentV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
