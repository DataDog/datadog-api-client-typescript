import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AzureUCConfigPairAttributes } from "./AzureUCConfigPairAttributes";
import { AzureUCConfigPairType } from "./AzureUCConfigPairType";

/**
 * Azure config pair.
 */
export class AzureUCConfigPair {
  /**
   * Attributes for Azure config pair.
   */
  "attributes": AzureUCConfigPairAttributes;
  /**
   * The ID of Cloud Cost Management account.
   */
  "id"?: number;
  /**
   * Type of Azure config pair.
   */
  "type": AzureUCConfigPairType;
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
    attributes: {
      baseName: "attributes",
      type: "AzureUCConfigPairAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "AzureUCConfigPairType",
      required: true,
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
    return AzureUCConfigPair.attributeTypeMap;
  }

  public constructor() {}
}
