import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A tool definition available to an LLM span.
 */
export class LLMObsSpanToolDefinition {
  /**
   * Description of what the tool does.
   */
  "description"?: string;
  /**
   * Name of the tool.
   */
  "name"?: string;
  /**
   * JSON schema describing the tool's input parameters.
   */
  "schema"?: { [key: string]: any };
  /**
   * Version of the tool definition.
   */
  "version"?: string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    schema: {
      baseName: "schema",
      type: "{ [key: string]: any; }",
    },
    version: {
      baseName: "version",
      type: "string",
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
    return LLMObsSpanToolDefinition.attributeTypeMap;
  }

  public constructor() {}
}
