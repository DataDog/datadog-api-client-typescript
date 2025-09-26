import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ResolveVulnerableSymbolsResponseDataAttributesResultsItemsVulnerableSymbolsItemsSymbolsItems } from "./ResolveVulnerableSymbolsResponseDataAttributesResultsItemsVulnerableSymbolsItemsSymbolsItems";

/**
 * The definition of `ResolveVulnerableSymbolsResponseDataAttributesResultsItemsVulnerableSymbolsItems` object.
 */
export class ResolveVulnerableSymbolsResponseDataAttributesResultsItemsVulnerableSymbolsItems {
  /**
   * The `items` `advisory_id`.
   */
  "advisoryId"?: string;
  /**
   * The `items` `symbols`.
   */
  "symbols"?: Array<ResolveVulnerableSymbolsResponseDataAttributesResultsItemsVulnerableSymbolsItemsSymbolsItems>;
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
    advisoryId: {
      baseName: "advisory_id",
      type: "string",
    },
    symbols: {
      baseName: "symbols",
      type: "Array<ResolveVulnerableSymbolsResponseDataAttributesResultsItemsVulnerableSymbolsItemsSymbolsItems>",
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
    return ResolveVulnerableSymbolsResponseDataAttributesResultsItemsVulnerableSymbolsItems.attributeTypeMap;
  }

  public constructor() {}
}
