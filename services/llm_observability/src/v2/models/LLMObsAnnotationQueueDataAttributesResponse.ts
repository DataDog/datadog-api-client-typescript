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
   * Whether the current caller can manage access for the annotation queue.
   */
  "canManageAccess": boolean;
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
   * Whether annotation access is restricted to assigned users.
   */
  "restrictToAssignees": boolean;
  /**
   * Whether annotation access is restricted to queue reviewers.
   */
  "restrictToReviewers": boolean;
  /**
   * Email addresses of reviewers for the annotation queue. Returned only when the caller can manage queue access.
   */
  "reviewerEmails"?: Array<string>;
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
    canManageAccess: {
      baseName: "can_manage_access",
      type: "boolean",
      required: true,
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
    restrictToAssignees: {
      baseName: "restrict_to_assignees",
      type: "boolean",
      required: true,
    },
    restrictToReviewers: {
      baseName: "restrict_to_reviewers",
      type: "boolean",
      required: true,
    },
    reviewerEmails: {
      baseName: "reviewer_emails",
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
    return LLMObsAnnotationQueueDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
