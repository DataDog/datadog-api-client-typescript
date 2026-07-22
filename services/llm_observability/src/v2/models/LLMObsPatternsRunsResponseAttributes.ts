import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsRunSummary } from "./LLMObsPatternsRunSummary";

/**
 * Attributes of an LLM Observability patterns runs response.
 */
export class LLMObsPatternsRunsResponseAttributes {
  /**
   * List of patterns runs.
   */
  "runs": Array<LLMObsPatternsRunSummary>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    runs: {
      baseName: "runs",
      type: "Array<LLMObsPatternsRunSummary>",
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
    return LLMObsPatternsRunsResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
