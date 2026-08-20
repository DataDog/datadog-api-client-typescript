import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Vertex AI-specific metadata for an integration account or inference request.
 */
export class LLMObsVertexAIMetadata {
  /**
   * The Vertex AI region.
   */
  "location"?: string;
  /**
   * The Google Cloud project ID.
   */
  "project"?: string;
  /**
   * List of Google Cloud project IDs available to the service account.
   */
  "projectIds"?: Array<string>;
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
    location: {
      baseName: "location",
      type: "string",
    },
    project: {
      baseName: "project",
      type: "string",
    },
    projectIds: {
      baseName: "project_ids",
      type: "Array<string>",
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
    return LLMObsVertexAIMetadata.attributeTypeMap;
  }

  public constructor() {}
}
