import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for deleting interactions from an annotation queue.
 */
export class LLMObsDeleteAnnotationQueueInteractionsDataAttributesRequest {
  /**
   * List of interaction IDs to delete. Must contain at least one item.
   */
  "interactionIds": Array<string>;
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
    interactionIds: {
      baseName: "interaction_ids",
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
    return LLMObsDeleteAnnotationQueueInteractionsDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
