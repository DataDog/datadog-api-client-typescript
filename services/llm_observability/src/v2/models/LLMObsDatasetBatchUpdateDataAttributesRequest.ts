import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetBatchUpdateInsertRecord } from "./LLMObsDatasetBatchUpdateInsertRecord";
import { LLMObsDatasetBatchUpdateUpdateRecord } from "./LLMObsDatasetBatchUpdateUpdateRecord";

/**
 * Attributes for batch-updating records in an LLM Observability dataset.
 */
export class LLMObsDatasetBatchUpdateDataAttributesRequest {
  /**
   * Whether to create a new dataset version when applying the batch update. Defaults to `true`.
   */
  "createNewVersion"?: boolean;
  /**
   * Record IDs to delete.
   */
  "deleteRecords"?: Array<string>;
  /**
   * Records to insert.
   */
  "insertRecords"?: Array<LLMObsDatasetBatchUpdateInsertRecord>;
  /**
   * List of tag strings.
   */
  "tags"?: Array<string>;
  /**
   * Records to update by ID.
   */
  "updateRecords"?: Array<LLMObsDatasetBatchUpdateUpdateRecord>;
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
    createNewVersion: {
      baseName: "create_new_version",
      type: "boolean",
    },
    deleteRecords: {
      baseName: "delete_records",
      type: "Array<string>",
    },
    insertRecords: {
      baseName: "insert_records",
      type: "Array<LLMObsDatasetBatchUpdateInsertRecord>",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    updateRecords: {
      baseName: "update_records",
      type: "Array<LLMObsDatasetBatchUpdateUpdateRecord>",
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
    return LLMObsDatasetBatchUpdateDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
