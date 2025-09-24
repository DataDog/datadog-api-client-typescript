import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UCConfigPairData } from "./UCConfigPairData";

/**
 * The definition of `UCConfigPair` object.
 */
export class UCConfigPair {
  /**
   * The definition of `UCConfigPairData` object.
   */
  "data"?: UCConfigPairData;
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
    data: {
      baseName: "data",
      type: "UCConfigPairData",
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
    return UCConfigPair.attributeTypeMap;
  }

  public constructor() {}
}
