import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes of a request to resolve vulnerable symbols, containing the list of package PURLs to check.
 */
export class ResolveVulnerableSymbolsRequestDataAttributes {
  /**
   * The list of Package URLs (PURLs) for which to resolve vulnerable symbols.
   */
  "purls"?: Array<string>;
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
    purls: {
      baseName: "purls",
      type: "Array<string>",
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
    return ResolveVulnerableSymbolsRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
