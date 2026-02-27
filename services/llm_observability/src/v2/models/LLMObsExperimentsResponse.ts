import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsCursorMeta } from "./LLMObsCursorMeta";
import { LLMObsExperimentDataResponse } from "./LLMObsExperimentDataResponse";

/**
 * Response containing a list of LLM Observability experiments.
 */
export class LLMObsExperimentsResponse {
  /**
   * List of experiments.
   */
  "data": Array<LLMObsExperimentDataResponse>;
  /**
   * Pagination cursor metadata.
   */
  "meta"?: LLMObsCursorMeta;
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
      type: "Array<LLMObsExperimentDataResponse>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "LLMObsCursorMeta",
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
    return LLMObsExperimentsResponse.attributeTypeMap;
  }

  public constructor() {}
}
