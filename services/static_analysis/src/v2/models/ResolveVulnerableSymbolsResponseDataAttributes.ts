import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ResolveVulnerableSymbolsResponseResults } from "./ResolveVulnerableSymbolsResponseResults";

/**
 * The definition of `ResolveVulnerableSymbolsResponseDataAttributes` object.
 */
export class ResolveVulnerableSymbolsResponseDataAttributes {
  /**
   * The `attributes` `results`.
   */
  "results"?: Array<ResolveVulnerableSymbolsResponseResults>;
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
    results: {
      baseName: "results",
      type: "Array<ResolveVulnerableSymbolsResponseResults>",
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
    return ResolveVulnerableSymbolsResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
