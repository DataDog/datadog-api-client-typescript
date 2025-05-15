import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Defines a mapping between an environment variable and a log field.
 */
export class ObservabilityPipelineAddEnvVarsProcessorVariable {
  /**
   * The target field in the log event.
   */
  "field": string;
  /**
   * The name of the environment variable to read.
   */
  "name": string;
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
    field: {
      baseName: "field",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
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
    return ObservabilityPipelineAddEnvVarsProcessorVariable.attributeTypeMap;
  }

  public constructor() {}
}
