import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetRecordsMutationData } from "./LLMObsDatasetRecordsMutationData";

/**
 * Response containing records after a create or update operation.
 */
export class LLMObsDatasetRecordsMutationResponse {
  /**
   * List of affected dataset records.
   */
  "data": Array<LLMObsDatasetRecordsMutationData>;
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
      type: "Array<LLMObsDatasetRecordsMutationData>",
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
    return LLMObsDatasetRecordsMutationResponse.attributeTypeMap;
  }

  public constructor() {}
}
