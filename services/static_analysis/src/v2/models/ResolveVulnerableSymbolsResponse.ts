import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ResolveVulnerableSymbolsResponseData } from "./ResolveVulnerableSymbolsResponseData";

/**
 * The definition of `ResolveVulnerableSymbolsResponse` object.
 */
export class ResolveVulnerableSymbolsResponse {
  /**
   * The definition of `ResolveVulnerableSymbolsResponseData` object.
   */
  "data"?: ResolveVulnerableSymbolsResponseData;
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
      type: "ResolveVulnerableSymbolsResponseData",
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
    return ResolveVulnerableSymbolsResponse.attributeTypeMap;
  }

  public constructor() {}
}
