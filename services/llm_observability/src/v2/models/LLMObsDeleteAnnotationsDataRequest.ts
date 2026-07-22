import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationsType } from "./LLMObsAnnotationsType";
import { LLMObsDeleteAnnotationsDataAttributesRequest } from "./LLMObsDeleteAnnotationsDataAttributesRequest";

/**
 * Data object for deleting annotations.
 */
export class LLMObsDeleteAnnotationsDataRequest {
  /**
   * Attributes for deleting annotations.
   */
  "attributes": LLMObsDeleteAnnotationsDataAttributesRequest;
  /**
   * Resource type for LLM Observability annotations.
   */
  "type": LLMObsAnnotationsType;
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
    attributes: {
      baseName: "attributes",
      type: "LLMObsDeleteAnnotationsDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsAnnotationsType",
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
    return LLMObsDeleteAnnotationsDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
