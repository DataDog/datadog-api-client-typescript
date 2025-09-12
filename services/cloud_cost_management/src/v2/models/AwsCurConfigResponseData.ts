import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsCurConfigResponseDataAttributes } from "./AwsCurConfigResponseDataAttributes";
import { AwsCurConfigResponseDataType } from "./AwsCurConfigResponseDataType";

/**
 * The definition of `AwsCurConfigResponseData` object.
 */
export class AwsCurConfigResponseData {
  /**
   * The definition of `AwsCurConfigResponseDataAttributes` object.
   */
  "attributes"?: AwsCurConfigResponseDataAttributes;
  /**
   * The `AwsCurConfigResponseData` `id`.
   */
  "id"?: string;
  /**
   * AWS CUR config resource type.
   */
  "type": AwsCurConfigResponseDataType;
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
      type: "AwsCurConfigResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AwsCurConfigResponseDataType",
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
    return AwsCurConfigResponseData.attributeTypeMap;
  }

  public constructor() {}
}
