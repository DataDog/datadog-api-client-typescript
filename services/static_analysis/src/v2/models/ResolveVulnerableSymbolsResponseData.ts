import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ResolveVulnerableSymbolsResponseDataAttributes } from "./ResolveVulnerableSymbolsResponseDataAttributes";
import { ResolveVulnerableSymbolsResponseDataType } from "./ResolveVulnerableSymbolsResponseDataType";

export class ResolveVulnerableSymbolsResponseData {
  "attributes"?: ResolveVulnerableSymbolsResponseDataAttributes;
  "id"?: string;
  "type": ResolveVulnerableSymbolsResponseDataType;
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
      type: "ResolveVulnerableSymbolsResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ResolveVulnerableSymbolsResponseDataType",
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
    return ResolveVulnerableSymbolsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
