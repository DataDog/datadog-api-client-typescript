import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsConcludeExperimentV2RequestData } from "./ExperimentsConcludeExperimentV2RequestData";

/**
 * Request to conclude an experiment with a winning variant.
 */
export class ExperimentsConcludeExperimentV2Request {
  /**
   * Experiment conclusion resource with the experiment identifier and decision.
   */
  "data": ExperimentsConcludeExperimentV2RequestData;
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
      type: "ExperimentsConcludeExperimentV2RequestData",
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
    return ExperimentsConcludeExperimentV2Request.attributeTypeMap;
  }

  public constructor() {}
}
