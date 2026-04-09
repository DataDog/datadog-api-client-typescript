import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Looks up a value stored as a pipeline secret.
 */
export class ObservabilityPipelineEnrichmentTableFieldSecretLookup {
  /**
   * The name of the secret containing the lookup key value.
   */
  "secret": string;
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
    secret: {
      baseName: "secret",
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
    return ObservabilityPipelineEnrichmentTableFieldSecretLookup.attributeTypeMap;
  }

  public constructor() {}
}
