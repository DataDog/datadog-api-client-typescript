import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ResolveVulnerableSymbolsRequestData } from "./ResolveVulnerableSymbolsRequestData";

/**
 * The top-level request object for resolving vulnerable symbols in a set of packages.
 */
export class ResolveVulnerableSymbolsRequest {
  /**
   * The data object in a request to resolve vulnerable symbols, containing the package PURLs and request type.
   */
  "data"?: ResolveVulnerableSymbolsRequestData;
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
      type: "ResolveVulnerableSymbolsRequestData",
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
    return ResolveVulnerableSymbolsRequest.attributeTypeMap;
  }

  public constructor() {}
}
