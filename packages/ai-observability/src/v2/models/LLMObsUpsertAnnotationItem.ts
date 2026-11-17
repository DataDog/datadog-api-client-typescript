import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

import { LLMObsAnnotationLabelValue } from "./LLMObsAnnotationLabelValue";

/**
 * A single annotation to create or update. The annotation is matched by
 * `interaction_id` and the requesting user's identity.
 */
export class LLMObsUpsertAnnotationItem {
  /**
   * Caller-supplied name or identifier for the external person or automated system that produced the labels.
   * The value is an opaque string with no required format. Use a stable, recognizable value for the same
   * producer across annotations.
   * The value is stored and returned as provided. It is not a Datadog user ID or login, and it is not
   * resolved against Datadog users.
   * Omit this field or set it to `null` to preserve existing attribution. Set it to an empty string to clear
   * attribution.
   */
  "annotator"?: string;
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
    annotator: {
      baseName: "annotator",
      type: "string",
    },
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
