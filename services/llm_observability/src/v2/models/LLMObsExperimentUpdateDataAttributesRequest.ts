import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for updating an LLM Observability experiment.
 */
export class LLMObsExperimentUpdateDataAttributesRequest {
  /**
   * Updated description of the experiment.
   */
  "description"?: string;
  /**
   * Updated name of the experiment.
   */
  "name"?: string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return LLMObsExperimentUpdateDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
