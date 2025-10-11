import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols } from "./ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols";

/**
 * The definition of `ResolveVulnerableSymbolsResponseResultsVulnerableSymbols` object.
 */
export class ResolveVulnerableSymbolsResponseResultsVulnerableSymbols {
  /**
   * The `items` `advisory_id`.
   */
  "advisoryId"?: string;
  /**
   * The `items` `symbols`.
   */
  "symbols"?: Array<ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols>;
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
      type: "Array<ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols>",
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
    return ResolveVulnerableSymbolsResponseResultsVulnerableSymbols.attributeTypeMap;
  }

  public constructor() {}
}
