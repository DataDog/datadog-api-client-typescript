import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationsDataAttributesRequest } from "./LLMObsAnnotationsDataAttributesRequest";
import { LLMObsAnnotationsType } from "./LLMObsAnnotationsType";

/**
 * Data object for creating or updating annotations.
 */
export class LLMObsAnnotationsDataRequest {
  /**
   * Attributes for creating or updating annotations.
   */
  "attributes": LLMObsAnnotationsDataAttributesRequest;
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
      type: "LLMObsAnnotationsDataAttributesRequest",
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
    return LLMObsAnnotationsDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
