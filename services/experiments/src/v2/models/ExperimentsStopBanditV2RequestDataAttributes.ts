import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The variant to serve once the bandit stops.
 */
export class ExperimentsStopBanditV2RequestDataAttributes {
  /**
   * Key of the flag variant to serve to everyone once the bandit stops. It can be any of the flag's variants, and overrides the configured fallback.
   */
  "servedVariantKey": string;
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
    servedVariantKey: {
      baseName: "served_variant_key",
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
    return ExperimentsStopBanditV2RequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
