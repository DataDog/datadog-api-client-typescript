import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentType } from "./LLMObsExperimentType";
import { LLMObsExperimentUpdateDataAttributesRequest } from "./LLMObsExperimentUpdateDataAttributesRequest";

/**
 * Data object for updating an LLM Observability experiment.
 */
export class LLMObsExperimentUpdateDataRequest {
  /**
   * Attributes for updating an LLM Observability experiment.
   */
  "attributes": LLMObsExperimentUpdateDataAttributesRequest;
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
      type: "LLMObsExperimentUpdateDataAttributesRequest",
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
    return LLMObsExperimentUpdateDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
