import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Attributes for deleting annotations.
 */
export class LLMObsDeleteAnnotationsDataAttributesRequest {
  /**
   * IDs of the annotations to delete. Must contain at least one item.
   */
  "annotationIds": Array<string>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    annotationIds: {
      baseName: "annotation_ids",
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
    return LLMObsDeleteAnnotationsDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
