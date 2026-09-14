import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An explicitly versioned prompt included as chat items. Omitting `items` includes every child message in its original order. When `items` is present, its zero-based indexes are inserted in the order provided; duplicate indexes are preserved.
 */
export class LLMObsPromptInclude {
  /**
   * Optional ordered zero-based child-message indexes. Order and duplicate indexes are preserved.
   */
  "items"?: Array<number>;
  /**
   * Customer-provided identifier of the included prompt. It cannot contain spaces, tabs, line breaks, braces, an equals sign, a comma, or quotes.
   */
  "promptId": string;
  /**
   * Positive sequential version number of the included prompt.
   */
  "version": number;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    items: {
      baseName: "items",
      type: "Array<number>",
      format: "int64",
    },
    promptId: {
      baseName: "prompt_id",
      type: "string",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LLMObsPromptInclude.attributeTypeMap;
  }

  public constructor() {}
}
