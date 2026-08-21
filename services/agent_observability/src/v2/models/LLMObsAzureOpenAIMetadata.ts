import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Azure OpenAI-specific metadata for an integration account or inference request.
 */
export class LLMObsAzureOpenAIMetadata {
  /**
   * The Azure OpenAI deployment ID.
   */
  "deploymentId"?: string;
  /**
   * The model version deployed in Azure.
   */
  "modelVersion"?: string;
  /**
   * The Azure OpenAI resource name.
   */
  "resourceName"?: string;
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
    deploymentId: {
      baseName: "deployment_id",
      type: "string",
    },
    modelVersion: {
      baseName: "model_version",
      type: "string",
    },
    resourceName: {
      baseName: "resource_name",
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
    return LLMObsAzureOpenAIMetadata.attributeTypeMap;
  }

  public constructor() {}
}
