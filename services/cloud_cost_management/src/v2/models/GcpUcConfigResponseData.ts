import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GcpUcConfigResponseDataAttributes } from "./GcpUcConfigResponseDataAttributes";
import { GcpUcConfigResponseDataType } from "./GcpUcConfigResponseDataType";

/**
 * The definition of `GcpUcConfigResponseData` object.
 */
export class GcpUcConfigResponseData {
  /**
   * The definition of `GcpUcConfigResponseDataAttributes` object.
   */
  "attributes"?: GcpUcConfigResponseDataAttributes;
  /**
   * The `GcpUcConfigResponseData` `id`.
   */
  "id"?: string;
  /**
   * Google Cloud Usage Cost config resource type.
   */
  "type": GcpUcConfigResponseDataType;
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
      type: "GcpUcConfigResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "GcpUcConfigResponseDataType",
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
    return GcpUcConfigResponseData.attributeTypeMap;
  }

  public constructor() {}
}
