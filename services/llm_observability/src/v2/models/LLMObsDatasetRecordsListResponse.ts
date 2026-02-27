import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsCursorMeta } from "./LLMObsCursorMeta";
import { LLMObsDatasetRecordDataResponse } from "./LLMObsDatasetRecordDataResponse";

/**
 * Response containing a paginated list of LLM Observability dataset records.
 */
export class LLMObsDatasetRecordsListResponse {
  /**
   * List of dataset records.
   */
  "data": Array<LLMObsDatasetRecordDataResponse>;
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
      type: "Array<LLMObsDatasetRecordDataResponse>",
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
    return LLMObsDatasetRecordsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
