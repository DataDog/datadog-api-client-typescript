import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UCConfigPairDataAttributes } from "./UCConfigPairDataAttributes";
import { UCConfigPairDataType } from "./UCConfigPairDataType";

/**
 * The definition of `UCConfigPairData` object.
 */
export class UCConfigPairData {
  /**
   * The definition of `UCConfigPairDataAttributes` object.
   */
  "attributes"?: UCConfigPairDataAttributes;
  /**
   * The `UCConfigPairData` `id`.
   */
  "id"?: string;
  /**
   * Azure UC configs resource type.
   */
  "type": UCConfigPairDataType;
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
      type: "UCConfigPairDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UCConfigPairDataType",
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
    return UCConfigPairData.attributeTypeMap;
  }

  public constructor() {}
}
