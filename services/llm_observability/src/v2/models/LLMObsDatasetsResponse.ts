import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsCursorMeta } from "./LLMObsCursorMeta";
import { LLMObsDatasetDataResponse } from "./LLMObsDatasetDataResponse";

/**
 * Response containing a list of LLM Observability datasets.
 */
export class LLMObsDatasetsResponse {
  /**
   * List of datasets.
   */
  "data": Array<LLMObsDatasetDataResponse>;
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
      type: "Array<LLMObsDatasetDataResponse>",
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
    return LLMObsDatasetsResponse.attributeTypeMap;
  }

  public constructor() {}
}
