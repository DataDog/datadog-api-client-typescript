import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnyValue } from "./AnyValue";
import { LLMObsExperimentSpanError } from "./LLMObsExperimentSpanError";

/**
 * Metadata associated with an experiment span.
 */
export class LLMObsExperimentSpanMeta {
  /**
   * Error details for an experiment span.
   */
  "error"?: LLMObsExperimentSpanError;
  /**
   * Expected output for the span, used for evaluation.
   */
  "expectedOutput"?: { [key: string]: any };
  /**
   * Represents any valid JSON value.
   */
  "input"?: AnyValue;
  /**
   * Represents any valid JSON value.
   */
  "output"?: AnyValue;
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
    error: {
      baseName: "error",
      type: "LLMObsExperimentSpanError",
    },
    expectedOutput: {
      baseName: "expected_output",
      type: "{ [key: string]: any; }",
    },
    input: {
      baseName: "input",
      type: "AnyValue",
    },
    output: {
      baseName: "output",
      type: "AnyValue",
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
    return LLMObsExperimentSpanMeta.attributeTypeMap;
  }

  public constructor() {}
}
