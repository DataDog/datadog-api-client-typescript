import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Additional data to include in the response.
 */
export class LLMObsExperimentationInclude {
  /**
   * When `true`, enrich results with author user data (name and email).
   */
  "userData"?: boolean;
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
    userData: {
      baseName: "user_data",
      type: "boolean",
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
    return LLMObsExperimentationInclude.attributeTypeMap;
  }

  public constructor() {}
}
