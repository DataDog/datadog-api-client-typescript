import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for updating an LLM Observability prompt. At least one of `title` or `description` must be provided; both attributes are optional individually.
 */
export class LLMObsUpdatePromptDataAttributes {
  /**
   * Optional new description for the prompt.
   */
  "description"?: string;
  /**
   * Optional new title for the prompt.
   */
  "title"?: string;
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
    title: {
      baseName: "title",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LLMObsUpdatePromptDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
