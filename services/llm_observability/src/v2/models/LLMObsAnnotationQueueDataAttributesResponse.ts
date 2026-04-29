import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationSchema } from "./LLMObsAnnotationSchema";

/**
 * Attributes of an LLM Observability annotation queue.
 */
export class LLMObsAnnotationQueueDataAttributesResponse {
  /**
   * Schema defining the labels for an annotation queue.
   */
  "annotationSchema"?: LLMObsAnnotationSchema;
  /**
   * Timestamp when the queue was created.
   */
  "createdAt": Date;
  /**
   * Identifier of the user who created the queue.
   */
  "createdBy": string;
  /**
   * Description of the annotation queue.
   */
  "description": string;
  /**
   * Timestamp when the queue was last modified.
   */
  "modifiedAt": Date;
  /**
   * Identifier of the user who last modified the queue.
   */
  "modifiedBy": string;
  /**
   * Name of the annotation queue.
   */
  "name": string;
  /**
   * Identifier of the user who owns the queue.
   */
  "ownedBy": string;
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
    annotationSchema: {
      baseName: "annotation_schema",
      type: "LLMObsAnnotationSchema",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    ownedBy: {
      baseName: "owned_by",
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
    return LLMObsAnnotationQueueDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
