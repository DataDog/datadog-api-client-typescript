import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentDataRequest } from "./LLMObsExperimentDataRequest";

/**
 * Request to create an LLM Observability experiment.
 */
export class LLMObsExperimentRequest {
  /**
   * Data object for creating an LLM Observability experiment.
   */
  "data": LLMObsExperimentDataRequest;
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
      type: "LLMObsExperimentDataRequest",
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
    return LLMObsExperimentRequest.attributeTypeMap;
  }

  public constructor() {}
}
