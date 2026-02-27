import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for deleting LLM Observability experiments.
 */
export class LLMObsDeleteExperimentsDataAttributesRequest {
  /**
   * List of experiment IDs to delete.
   */
  "experimentIds": Array<string>;
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
    experimentIds: {
      baseName: "experiment_ids",
      type: "Array<string>",
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
    return LLMObsDeleteExperimentsDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
