import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ResolveVulnerableSymbolsResponseResultsVulnerableSymbols } from "./ResolveVulnerableSymbolsResponseResultsVulnerableSymbols";

/**
 * The result of resolving vulnerable symbols for a specific package, identified by its PURL.
 */
export class ResolveVulnerableSymbolsResponseResults {
  /**
   * The Package URL (PURL) uniquely identifying the package for which vulnerable symbols are resolved.
   */
  "purl"?: string;
  /**
   * The list of vulnerable symbol groups found in this package, organized by advisory.
   */
  "vulnerableSymbols"?: Array<ResolveVulnerableSymbolsResponseResultsVulnerableSymbols>;
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
      type: "Array<ResolveVulnerableSymbolsResponseResultsVulnerableSymbols>",
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
    return ResolveVulnerableSymbolsResponseResults.attributeTypeMap;
  }

  public constructor() {}
}
