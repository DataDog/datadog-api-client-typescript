/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols } from "./ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
