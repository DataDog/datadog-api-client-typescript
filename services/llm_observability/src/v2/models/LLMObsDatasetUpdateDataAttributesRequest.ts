import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for updating an LLM Observability dataset.
 */
export class LLMObsDatasetUpdateDataAttributesRequest {
  /**
   * Updated description of the dataset.
   */
  "description"?: string;
  /**
   * Updated metadata associated with the dataset.
   */
  "metadata"?: { [key: string]: any };
  /**
   * Updated name of the dataset.
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
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: any; }",
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
    return LLMObsDatasetUpdateDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
