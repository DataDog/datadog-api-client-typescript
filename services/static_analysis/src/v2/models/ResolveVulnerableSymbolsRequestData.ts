import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ResolveVulnerableSymbolsRequestDataAttributes } from "./ResolveVulnerableSymbolsRequestDataAttributes";
import { ResolveVulnerableSymbolsRequestDataType } from "./ResolveVulnerableSymbolsRequestDataType";

/**
 * The data object in a request to resolve vulnerable symbols, containing the package PURLs and request type.
 */
export class ResolveVulnerableSymbolsRequestData {
  /**
   * The attributes of a request to resolve vulnerable symbols, containing the list of package PURLs to check.
   */
  "attributes"?: ResolveVulnerableSymbolsRequestDataAttributes;
  /**
   * An optional identifier for this request data object.
   */
  "id"?: string;
  /**
   * The type identifier for requests to resolve vulnerable symbols.
   */
  "type": ResolveVulnerableSymbolsRequestDataType;
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
    attributes: {
      baseName: "attributes",
      type: "ResolveVulnerableSymbolsRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ResolveVulnerableSymbolsRequestDataType",
      required: true,
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
    return ResolveVulnerableSymbolsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
