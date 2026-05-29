import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for cloning an LLM Observability dataset.
 */
export class LLMObsDatasetCloneDataAttributesRequest {
  /**
   * Description of the cloned dataset.
   */
  "description"?: string;
  /**
   * Name of the cloned dataset.
   */
  "name": string;
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
    return LLMObsDatasetCloneDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
