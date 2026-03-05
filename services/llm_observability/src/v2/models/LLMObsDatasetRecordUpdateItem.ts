import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnyValue } from "./AnyValue";

/**
 * A record update payload for an LLM Observability dataset.
 */
export class LLMObsDatasetRecordUpdateItem {
  /**
   * Represents any valid JSON value.
   */
  "expectedOutput"?: AnyValue;
  /**
   * Unique identifier of the record to update.
   */
  "id": string;
  /**
   * Represents any valid JSON value.
   */
  "input"?: AnyValue;
  /**
   * Updated metadata associated with the record.
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    input: {
      baseName: "input",
      type: "AnyValue",
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
    return LLMObsDatasetRecordUpdateItem.attributeTypeMap;
  }

  public constructor() {}
}
