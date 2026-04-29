import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsLabelSchemaType } from "./LLMObsLabelSchemaType";

/**
 * Schema definition for a single label in an annotation queue.
 */
export class LLMObsLabelSchema {
  /**
   * Description of the label.
   */
  "description"?: string;
  /**
   * Whether this label includes an assessment field.
   */
  "hasAssessment"?: boolean;
  /**
   * Whether this label includes a reasoning field.
   */
  "hasReasoning"?: boolean;
  /**
   * Unique identifier of the label schema. Assigned by the server if not provided.
   */
  "id"?: string;
  /**
   * Whether the boolean label represents an assessment. Requires `has_assessment` to be true.
   */
  "isAssessment"?: boolean;
  /**
   * Whether score values must be integers. Applicable to score-type labels.
   */
  "isInteger"?: boolean;
  /**
   * Whether this label is required for an annotation.
   */
  "isRequired"?: boolean;
  /**
   * Maximum value for score-type labels.
   */
  "max"?: number;
  /**
   * Minimum value for score-type labels.
   */
  "min"?: number;
  /**
   * Name of the label. Must match the pattern `^[a-zA-Z0-9_-]+$` and be unique within the queue.
   */
  "name": string;
  /**
   * Type of a label in an annotation queue label schema.
   */
  "type": LLMObsLabelSchemaType;
  /**
   * Allowed values for categorical-type labels. Must contain at least one non-empty, unique value.
   */
  "values"?: Array<string>;
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
    hasAssessment: {
      baseName: "has_assessment",
      type: "boolean",
    },
    hasReasoning: {
      baseName: "has_reasoning",
      type: "boolean",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    isAssessment: {
      baseName: "is_assessment",
      type: "boolean",
    },
    isInteger: {
      baseName: "is_integer",
      type: "boolean",
    },
    isRequired: {
      baseName: "is_required",
      type: "boolean",
    },
    max: {
      baseName: "max",
      type: "number",
      format: "double",
    },
    min: {
      baseName: "min",
      type: "number",
      format: "double",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsLabelSchemaType",
      required: true,
    },
    values: {
      baseName: "values",
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
    return LLMObsLabelSchema.attributeTypeMap;
  }

  public constructor() {}
}
