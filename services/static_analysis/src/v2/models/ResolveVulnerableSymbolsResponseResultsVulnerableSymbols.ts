import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols } from "./ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols";

/**
 * A collection of vulnerable symbols associated with a specific security advisory.
 */
export class ResolveVulnerableSymbolsResponseResultsVulnerableSymbols {
  /**
   * The identifier of the security advisory that describes the vulnerability.
   */
  "advisoryId"?: string;
  /**
   * The list of symbols that are vulnerable according to this advisory.
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
