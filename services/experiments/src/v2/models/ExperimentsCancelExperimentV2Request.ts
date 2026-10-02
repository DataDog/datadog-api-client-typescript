import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCancelExperimentV2RequestData } from "./ExperimentsCancelExperimentV2RequestData";

/**
 * Request to cancel an experiment and record a reason.
 */
export class ExperimentsCancelExperimentV2Request {
  /**
   * Experiment cancellation resource with the experiment identifier and reason.
   */
  "data": ExperimentsCancelExperimentV2RequestData;
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
      type: "ExperimentsCancelExperimentV2RequestData",
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
    return ExperimentsCancelExperimentV2Request.attributeTypeMap;
  }

  public constructor() {}
}
