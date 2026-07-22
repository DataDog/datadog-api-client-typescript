import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsUpsertAnnotationItem } from "./LLMObsUpsertAnnotationItem";

/**
 * Attributes for creating or updating annotations.
 */
export class LLMObsAnnotationsDataAttributesRequest {
  /**
   * List of annotations to create or update. Must contain at least one item.
   */
  "annotations": Array<LLMObsUpsertAnnotationItem>;
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
    annotations: {
      baseName: "annotations",
      type: "Array<LLMObsUpsertAnnotationItem>",
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
    return LLMObsAnnotationsDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
