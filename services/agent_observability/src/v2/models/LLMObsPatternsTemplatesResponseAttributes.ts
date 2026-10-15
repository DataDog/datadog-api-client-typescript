import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsTemplateItem } from "./LLMObsPatternsTemplateItem";

/**
 * Attributes of a list of Agent Observability patterns templates.
 */
export class LLMObsPatternsTemplatesResponseAttributes {
  /**
   * List of patterns templates.
   */
  "templates": Array<LLMObsPatternsTemplateItem>;
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
    templates: {
      baseName: "templates",
      type: "Array<LLMObsPatternsTemplateItem>",
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
    return LLMObsPatternsTemplatesResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
