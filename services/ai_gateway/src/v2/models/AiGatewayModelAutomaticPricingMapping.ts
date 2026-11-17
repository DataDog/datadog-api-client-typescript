import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The reviewed endpoint mapping used to identify a custom provider. Omitted when the provider and model identity matched exactly.
 */
export class AiGatewayModelAutomaticPricingMapping {
  /**
   * Mapping identifier.
   */
  "id": string;
  /**
   * Mapping revision.
   */
  "revision": string;
  /**
   * Mapping scope, such as `provider`.
   */
  "scope": string;
  /**
   * Mapping version.
   */
  "version": number;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    revision: {
      baseName: "revision",
      type: "string",
      required: true,
    },
    scope: {
      baseName: "scope",
      type: "string",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
      format: "int64",
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
    return AiGatewayModelAutomaticPricingMapping.attributeTypeMap;
  }

  public constructor() {}
}
