import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AzureUCConfigPair } from "./AzureUCConfigPair";

/**
 * List of Azure accounts with configs.
 */
export class AzureUCConfigsResponse {
  /**
   * An Azure config pair.
   */
  "data"?: Array<AzureUCConfigPair>;
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
    data: {
      baseName: "data",
      type: "Array<AzureUCConfigPair>",
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
    return AzureUCConfigsResponse.attributeTypeMap;
  }

  public constructor() {}
}
