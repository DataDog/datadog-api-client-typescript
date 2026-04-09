import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A single annotation on an interaction.
 */
export class LLMObsAnnotationItem {
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
   * The label values for this annotation.
   */
  "labelValues": { [key: string]: any };
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
      type: "{ [key: string]: any; }",
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
    return LLMObsAnnotationItem.attributeTypeMap;
  }

  public constructor() {}
}
