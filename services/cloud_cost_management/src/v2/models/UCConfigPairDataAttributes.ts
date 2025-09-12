import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UCConfigPairDataAttributesConfigsItems } from "./UCConfigPairDataAttributesConfigsItems";

/**
 * The definition of `UCConfigPairDataAttributes` object.
 */
export class UCConfigPairDataAttributes {
  /**
   * The `attributes` `configs`.
   */
  "configs"?: Array<UCConfigPairDataAttributesConfigsItems>;
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
    configs: {
      baseName: "configs",
      type: "Array<UCConfigPairDataAttributesConfigsItems>",
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
    return UCConfigPairDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
