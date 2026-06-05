import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationLabelValue } from "./LLMObsAnnotationLabelValue";

/**
 * A single annotation to create or update. The annotation is matched by
 * `interaction_id` and the requesting user's identity.
 */
export class LLMObsUpsertAnnotationItem {
  /**
   * ID of the interaction to annotate.
   */
  "interactionId": string;
  /**
   * Label values for this annotation. Each entry references a label schema by ID
   * and provides the corresponding value validated against the schema type constraints.
   */
  "labelValues": Array<LLMObsAnnotationLabelValue>;
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
    interactionId: {
      baseName: "interaction_id",
      type: "string",
      required: true,
    },
    labelValues: {
      baseName: "label_values",
      type: "Array<LLMObsAnnotationLabelValue>",
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
    return LLMObsUpsertAnnotationItem.attributeTypeMap;
  }

  public constructor() {}
}
