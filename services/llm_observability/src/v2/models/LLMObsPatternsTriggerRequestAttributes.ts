import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for triggering an LLM Observability patterns run.
 */
export class LLMObsPatternsTriggerRequestAttributes {
  /**
   * The ID of the patterns configuration to run.
   */
  "configId": string;
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
    configId: {
      baseName: "config_id",
      type: "string",
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
    return LLMObsPatternsTriggerRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
