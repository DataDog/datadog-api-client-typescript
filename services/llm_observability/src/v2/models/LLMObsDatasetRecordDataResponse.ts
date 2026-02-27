import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnyValue } from "./AnyValue";

/**
 * A single LLM Observability dataset record.
 */
export class LLMObsDatasetRecordDataResponse {
  /**
   * Timestamp when the record was created.
   */
  "createdAt": Date;
  /**
   * Identifier of the dataset this record belongs to.
   */
  "datasetId": string;
  /**
   * Represents any valid JSON value.
   */
  "expectedOutput": AnyValue | null;
  /**
   * Unique identifier of the record.
   */
  "id": string;
  /**
   * Represents any valid JSON value.
   */
  "input": AnyValue | null;
  /**
   * Arbitrary metadata associated with the record.
   */
  "metadata": { [key: string]: any } | null;
  /**
   * Timestamp when the record was last updated.
   */
  "updatedAt": Date;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    datasetId: {
      baseName: "dataset_id",
      type: "string",
      required: true,
    },
    expectedOutput: {
      baseName: "expected_output",
      type: "AnyValue",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    input: {
      baseName: "input",
      type: "AnyValue",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: any; }",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return LLMObsDatasetRecordDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
