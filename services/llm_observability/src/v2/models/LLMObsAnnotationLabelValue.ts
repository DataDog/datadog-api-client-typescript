import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationAssessment } from "./LLMObsAnnotationAssessment";
import { LLMObsAnnotationLabelValueValue } from "./LLMObsAnnotationLabelValueValue";

/**
 * A single label value entry in an annotation.
 * The `value` type must match the label schema type:
 * - `score`: a number within the schema `min`/`max` range (integer if `is_integer` is `true`).
 * - `categorical`: a string that is one of the schema `values`.
 * - `boolean`: `true` or `false`.
 * - `text`: any non-empty string.
 */
export class LLMObsAnnotationLabelValue {
  /**
   * Assessment result for a label value.
   */
  "assessment"?: LLMObsAnnotationAssessment;
  /**
   * ID of the label schema this value corresponds to.
   */
  "labelSchemaId": string;
  /**
   * Free text reasoning for this label value.
   */
  "reasoning"?: string;
  /**
   * The value for this label. Must comply with the label schema type constraints.
   */
  "value": LLMObsAnnotationLabelValueValue;
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
    assessment: {
      baseName: "assessment",
      type: "LLMObsAnnotationAssessment",
    },
    labelSchemaId: {
      baseName: "label_schema_id",
      type: "string",
      required: true,
    },
    reasoning: {
      baseName: "reasoning",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "LLMObsAnnotationLabelValueValue",
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
    return LLMObsAnnotationLabelValue.attributeTypeMap;
  }

  public constructor() {}
}
