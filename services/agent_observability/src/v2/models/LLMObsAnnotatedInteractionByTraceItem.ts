import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationItemResponse } from "./LLMObsAnnotationItemResponse";
import { LLMObsAnyInteractionType } from "./LLMObsAnyInteractionType";
import { LLMObsContentBlock } from "./LLMObsContentBlock";
import { LLMObsFrontendContent } from "./LLMObsFrontendContent";

/**
 * An annotated interaction returned by the cross-queue lookup, including the source queue metadata.
 */
export class LLMObsAnnotatedInteractionByTraceItem {
  /**
   * List of annotations for this interaction.
   */
  "annotations": Array<LLMObsAnnotationItemResponse>;
  /**
   * Whether the current caller can annotate this interaction.
   */
  "canAnnotate": boolean;
  /**
   * Upstream entity identifier (trace ID, session ID, or deterministic display_block or frontend ID).
   */
  "contentId": string;
  /**
   * Timestamp when the interaction was added to the queue.
   */
  "createdAt": Date;
  /**
   * List of content blocks that make up a `display_block` interaction.
   * Must contain at least one block.
   */
  "displayBlock"?: Array<LLMObsContentBlock>;
  /**
   * Web content that makes up a `frontend` interaction.
   */
  "frontend"?: LLMObsFrontendContent;
  /**
   * Unique identifier of the interaction.
   */
  "id": string;
  /**
   * Timestamp when the interaction was last updated.
   */
  "modifiedAt": Date;
  /**
   * Identifier of the annotation queue this interaction belongs to.
   */
  "queueId": string;
  /**
   * Name of the annotation queue this interaction belongs to.
   */
  "queueName": string;
  /**
   * Type of an annotated interaction.
   */
  "type": LLMObsAnyInteractionType;
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
    annotations: {
      baseName: "annotations",
      type: "Array<LLMObsAnnotationItemResponse>",
      required: true,
    },
    canAnnotate: {
      baseName: "can_annotate",
      type: "boolean",
      required: true,
    },
    contentId: {
      baseName: "content_id",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    displayBlock: {
      baseName: "display_block",
      type: "Array<LLMObsContentBlock>",
    },
    frontend: {
      baseName: "frontend",
      type: "LLMObsFrontendContent",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    queueId: {
      baseName: "queue_id",
      type: "string",
      required: true,
    },
    queueName: {
      baseName: "queue_name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsAnyInteractionType",
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
    return LLMObsAnnotatedInteractionByTraceItem.attributeTypeMap;
  }

  public constructor() {}
}
