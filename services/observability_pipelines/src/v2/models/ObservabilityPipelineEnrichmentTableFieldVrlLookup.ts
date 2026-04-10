import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Evaluates a VRL expression to produce the lookup key.
 */
export class ObservabilityPipelineEnrichmentTableFieldVrlLookup {
  /**
   * A VRL expression that returns the value to use as the lookup key.
   */
  "vrl": string;
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
    vrl: {
      baseName: "vrl",
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
    return ObservabilityPipelineEnrichmentTableFieldVrlLookup.attributeTypeMap;
  }

  public constructor() {}
}
