/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnyValue } from "./AnyValue";
import { LLMObsDatasetRecordTagOperations } from "./LLMObsDatasetRecordTagOperations";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A record to insert as part of a batch update on an LLM Observability dataset.
 */
export class LLMObsDatasetBatchUpdateInsertRecord {
  /**
   * Represents any valid JSON value.
   */
  "expectedOutput"?: AnyValue;
  /**
   * Optional user-provided identifier for the record. If omitted, the server generates an identifier.
   */
  "id"?: string;
  /**
   * Represents any valid JSON value.
   */
  "input": AnyValue | null;
  /**
   * Arbitrary metadata associated with the record.
   */
  "metadata"?: { [key: string]: any };
  /**
   * Explicit tag operations for updating records. Operations are applied in order, Remove then Add then Set. `set` is the final override; if specified, the result of `remove` and `add` is discarded.
   */
  "tagOperations"?: LLMObsDatasetRecordTagOperations;
  /**
   * List of tag strings.
   */
  "tags"?: Array<string>;

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
    expectedOutput: {
      baseName: "expected_output",
      type: "AnyValue",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    input: {
      baseName: "input",
      type: "AnyValue",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: any; }",
    },
    tagOperations: {
      baseName: "tag_operations",
      type: "LLMObsDatasetRecordTagOperations",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return LLMObsDatasetBatchUpdateInsertRecord.attributeTypeMap;
  }

  public constructor() {}
}
