import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for updating an LLM Observability project.
 */
export class LLMObsProjectUpdateDataAttributesRequest {
  /**
   * Updated description of the project.
   */
  "description"?: string;
  /**
   * Updated name of the project.
   */
  "name"?: string;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LLMObsProjectUpdateDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
