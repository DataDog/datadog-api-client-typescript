/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ResolveVulnerableSymbolsResponseResultsVulnerableSymbols } from "./ResolveVulnerableSymbolsResponseResultsVulnerableSymbols";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ResolveVulnerableSymbolsResponseResults` object.
 */
export class ResolveVulnerableSymbolsResponseResults {
  /**
   * The `items` `purl`.
   */
  "purl"?: string;
  /**
   * The `items` `vulnerable_symbols`.
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
