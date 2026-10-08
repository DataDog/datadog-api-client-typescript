import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for requesting SPA recommendations by forwarding a Spark job's raw arguments
 * instead of a pre-computed shard.
 */
export class RecommendationV2RequestAttributes {
  /**
   * Raw, unfiltered Spark job arguments as submitted (for example, `--org_id=2`).
   * SPA determines which arguments are relevant for the given service.
   */
  "arguments": Array<string>;
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
    arguments: {
      baseName: "arguments",
      type: "Array<string>",
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
    return RecommendationV2RequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
