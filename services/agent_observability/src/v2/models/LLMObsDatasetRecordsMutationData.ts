import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetRecordDataResponse } from "./LLMObsDatasetRecordDataResponse";

/**
 * Response containing records after a create or update operation.
 */
export class LLMObsDatasetRecordsMutationData {
  /**
   * List of affected dataset records.
   */
  "records": Array<LLMObsDatasetRecordDataResponse>;
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
    records: {
      baseName: "records",
      type: "Array<LLMObsDatasetRecordDataResponse>",
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
    return LLMObsDatasetRecordsMutationData.attributeTypeMap;
  }

  public constructor() {}
}
