import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnyValue } from "./AnyValue";

/**
 * A single record to append to an LLM Observability dataset.
 */
export class LLMObsDatasetRecordItem {
  /**
   * Represents any valid JSON value.
   */
  "expectedOutput"?: AnyValue;
  /**
   * Represents any valid JSON value.
   */
  "input": AnyValue | null;
  /**
   * Arbitrary metadata associated with the record.
   */
  "metadata"?: { [key: string]: any };
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
    input: {
      baseName: "input",
      type: "AnyValue",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: any; }",
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
    return LLMObsDatasetRecordItem.attributeTypeMap;
  }

  public constructor() {}
}
