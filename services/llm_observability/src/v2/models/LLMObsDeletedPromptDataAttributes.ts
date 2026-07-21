import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes confirming that an LLM Observability prompt was deleted.
 */
export class LLMObsDeletedPromptDataAttributes {
  /**
   * Timestamp when the prompt was deleted.
   */
  "deletedAt": Date;
  /**
   * Customer-provided identifier of the deleted prompt.
   */
  "promptId": string;
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
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    promptId: {
      baseName: "prompt_id",
      type: "string",
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
    return LLMObsDeletedPromptDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
