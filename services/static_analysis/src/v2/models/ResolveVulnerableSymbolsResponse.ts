import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ResolveVulnerableSymbolsResponseData } from "./ResolveVulnerableSymbolsResponseData";

/**
 * The top-level response object returned when resolving vulnerable symbols for a set of packages.
 */
export class ResolveVulnerableSymbolsResponse {
  /**
   * The data object in a response for resolving vulnerable symbols, containing the result attributes and response type.
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
