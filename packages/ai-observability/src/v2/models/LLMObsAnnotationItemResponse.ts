import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

import { LLMObsAnnotationLabelValueResponse } from "./LLMObsAnnotationLabelValueResponse";

/**
 * A single annotation on an interaction, as returned by the API.
 */
export class LLMObsAnnotationItemResponse {
  /**
   * Caller-supplied name or identifier for the external person or automated system that produced the labels.
   * The value is stored and returned as provided. It is not a Datadog user ID or login, and it is not
   * resolved against Datadog users.
   */
  "annotator"?: string;
  /**
   * Timestamp when the annotation was created.
   */
  "createdAt": Date;
  /**
   * Identifier of the user who created the annotation.
   */
  "createdBy": string;
  /**
   * Unique identifier of the annotation.
   */
  "id": string;
  /**
   * Identifier of the interaction this annotation belongs to.
   */
  "interactionId": string;
  /**
   * Label values for this annotation. Each entry references a label schema by ID
   * and provides the corresponding value.
   */
  "labelValues": Array<LLMObsAnnotationLabelValueResponse>;
  /**
   * Timestamp when the annotation was last modified.
   */
  "modifiedAt": Date;
  /**
   * Identifier of the user who last modified the annotation.
   */
  "modifiedBy": string;
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
    annotator: {
      baseName: "annotator",
      type: "string",
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    interactionId: {
      baseName: "interaction_id",
      type: "string",
      required: true,
    },
    labelValues: {
      baseName: "label_values",
      type: "Array<LLMObsAnnotationLabelValueResponse>",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LLMObsAnnotationItemResponse.attributeTypeMap;
  }

  public constructor() {}
}
