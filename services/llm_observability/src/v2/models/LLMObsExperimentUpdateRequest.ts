import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentUpdateDataRequest } from "./LLMObsExperimentUpdateDataRequest";

/**
 * Request to partially update an LLM Observability experiment.
 */
export class LLMObsExperimentUpdateRequest {
  /**
   * Data object for updating an LLM Observability experiment.
   */
  "data": LLMObsExperimentUpdateDataRequest;
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
      type: "LLMObsExperimentUpdateDataRequest",
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
    return LLMObsExperimentUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
