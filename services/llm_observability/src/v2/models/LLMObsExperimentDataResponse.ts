import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentDataAttributesResponse } from "./LLMObsExperimentDataAttributesResponse";
import { LLMObsExperimentType } from "./LLMObsExperimentType";

/**
 * Data object for an LLM Observability experiment.
 */
export class LLMObsExperimentDataResponse {
  /**
   * Attributes of an LLM Observability experiment.
   */
  "attributes": LLMObsExperimentDataAttributesResponse;
  /**
   * Unique identifier of the experiment.
   */
  "id": string;
  /**
   * Resource type of an LLM Observability experiment.
   */
  "type": LLMObsExperimentType;
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
      type: "LLMObsExperimentDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsExperimentType",
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
    return LLMObsExperimentDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
