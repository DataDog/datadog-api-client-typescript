import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsCursorMeta } from "./LLMObsCursorMeta";
import { LLMObsExperimentationSearchDataResponse } from "./LLMObsExperimentationSearchDataResponse";

/**
 * Response to a cursor-based experimentation search. Returns `200 OK` when all results fit in one page; `206 Partial Content` when a next-page cursor is available.
 */
export class LLMObsExperimentationSearchResponse {
  /**
   * JSON:API data object for an experimentation search response.
   */
  "data": LLMObsExperimentationSearchDataResponse;
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
      type: "LLMObsExperimentationSearchDataResponse",
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
    return LLMObsExperimentationSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
