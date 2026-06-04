import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAnnotationsDataAttributesResponse } from "./LLMObsAnnotationsDataAttributesResponse";
import { LLMObsAnnotationsType } from "./LLMObsAnnotationsType";

/**
 * Data object for the annotations response.
 */
export class LLMObsAnnotationsDataResponse {
  /**
   * Attributes of the annotations response.
   */
  "attributes": LLMObsAnnotationsDataAttributesResponse;
  /**
   * The annotation queue ID.
   */
  "id": string;
  /**
   * Resource type for LLM Observability annotations.
   */
  "type": LLMObsAnnotationsType;
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
    attributes: {
      baseName: "attributes",
      type: "LLMObsAnnotationsDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return LLMObsAnnotationsDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
