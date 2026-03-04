import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentDataAttributesRequest } from "./LLMObsExperimentDataAttributesRequest";
import { LLMObsExperimentType } from "./LLMObsExperimentType";

/**
 * Data object for creating an LLM Observability experiment.
 */
export class LLMObsExperimentDataRequest {
  /**
   * Attributes for creating an LLM Observability experiment.
   */
  "attributes": LLMObsExperimentDataAttributesRequest;
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
      type: "LLMObsExperimentDataAttributesRequest",
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
    return LLMObsExperimentDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
