import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Attributes of an LLM Observability patterns trigger response.
 */
export class LLMObsPatternsTriggerResponseAttributes {
  /**
   * The ID of the patterns configuration that was run.
   */
  "configId": string;
  /**
   * The ID of the patterns run that was started.
   */
  "runId": string;
  /**
   * Status of the patterns run.
   */
  "status": string;
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
    configId: {
      baseName: "config_id",
      type: "string",
      required: true,
    },
    runId: {
      baseName: "run_id",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
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
    return LLMObsPatternsTriggerResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
