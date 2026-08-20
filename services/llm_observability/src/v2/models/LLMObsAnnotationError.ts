import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationErrorCode } from "./LLMObsAnnotationErrorCode";

/**
 * A partial error for a single annotation that could not be processed.
 */
export class LLMObsAnnotationError {
  /**
   * ID of the annotation that failed, if applicable.
   */
  "annotationId"?: string;
  /**
   * Stable error code. `permission_denied` indicates the item was rejected by queue access rules.
   */
  "code"?: LLMObsAnnotationErrorCode;
  /**
   * Error message.
   */
  "error": string;
  /**
   * ID of the interaction that failed.
   */
  "interactionId": string;
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
    annotationId: {
      baseName: "annotation_id",
      type: "string",
    },
    code: {
      baseName: "code",
      type: "LLMObsAnnotationErrorCode",
    },
    error: {
      baseName: "error",
      type: "string",
      required: true,
    },
    interactionId: {
      baseName: "interaction_id",
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
    return LLMObsAnnotationError.attributeTypeMap;
  }

  public constructor() {}
}
