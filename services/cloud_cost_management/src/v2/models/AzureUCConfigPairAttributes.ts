import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AzureUCConfig } from "./AzureUCConfig";

/**
 * Attributes for Azure config pair.
 */
export class AzureUCConfigPairAttributes {
  /**
   * An Azure config.
   */
  "configs": Array<AzureUCConfig>;
  /**
   * The ID of the Azure config pair.
   */
  "id"?: number;
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
    configs: {
      baseName: "configs",
      type: "Array<AzureUCConfig>",
      required: true,
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AzureUCConfigPairAttributes.attributeTypeMap;
  }

  public constructor() {}
}
