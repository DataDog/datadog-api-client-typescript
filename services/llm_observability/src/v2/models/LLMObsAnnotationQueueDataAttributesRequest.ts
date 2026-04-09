import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating an LLM Observability annotation queue.
 */
export class LLMObsAnnotationQueueDataAttributesRequest {
  /**
   * Description of the annotation queue.
   */
  "description"?: string;
  /**
   * Name of the annotation queue.
   */
  "name": string;
  /**
   * Identifier of the project this queue belongs to.
   */
  "projectId": string;
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
    projectId: {
      baseName: "project_id",
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
    return LLMObsAnnotationQueueDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
