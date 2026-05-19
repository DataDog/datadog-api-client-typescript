import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentationSimpleSearchDataResponse } from "./LLMObsExperimentationSimpleSearchDataResponse";
import { LLMObsExperimentationSimpleSearchMeta } from "./LLMObsExperimentationSimpleSearchMeta";

/**
 * Response to an offset-based experimentation simple search.
 */
export class LLMObsExperimentationSimpleSearchResponse {
  /**
   * JSON:API data object for a simple search response.
   */
  "data": LLMObsExperimentationSimpleSearchDataResponse;
  /**
   * Pagination metadata for a simple search response.
   */
  "meta"?: LLMObsExperimentationSimpleSearchMeta;
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
      type: "LLMObsExperimentationSimpleSearchDataResponse",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "LLMObsExperimentationSimpleSearchMeta",
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
    return LLMObsExperimentationSimpleSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
