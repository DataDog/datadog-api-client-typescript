import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ResolveVulnerableSymbolsResponseDataAttributesResultsItemsVulnerableSymbolsItems } from "./ResolveVulnerableSymbolsResponseDataAttributesResultsItemsVulnerableSymbolsItems";

/**
 * The definition of `ResolveVulnerableSymbolsResponseDataAttributesResultsItems` object.
 */
export class ResolveVulnerableSymbolsResponseDataAttributesResultsItems {
  /**
   * The `items` `purl`.
   */
  "purl"?: string;
  /**
   * The `items` `vulnerable_symbols`.
   */
  "vulnerableSymbols"?: Array<ResolveVulnerableSymbolsResponseDataAttributesResultsItemsVulnerableSymbolsItems>;
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
    purl: {
      baseName: "purl",
      type: "string",
    },
    vulnerableSymbols: {
      baseName: "vulnerable_symbols",
      type: "Array<ResolveVulnerableSymbolsResponseDataAttributesResultsItemsVulnerableSymbolsItems>",
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
    return ResolveVulnerableSymbolsResponseDataAttributesResultsItems.attributeTypeMap;
  }

  public constructor() {}
}
