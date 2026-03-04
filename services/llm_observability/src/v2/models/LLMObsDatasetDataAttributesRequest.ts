import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating an LLM Observability dataset.
 */
export class LLMObsDatasetDataAttributesRequest {
  /**
   * Description of the dataset.
   */
  "description"?: string;
  /**
   * Arbitrary metadata associated with the dataset.
   */
  "metadata"?: { [key: string]: any };
  /**
   * Name of the dataset.
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
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: any; }",
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
    return LLMObsDatasetDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
