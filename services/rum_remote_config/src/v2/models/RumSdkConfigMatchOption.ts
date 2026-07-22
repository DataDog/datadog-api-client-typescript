import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSdkConfigMatchOptionSerializedType } from "./RumSdkConfigMatchOptionSerializedType";

/**
 * A match option used for URL or origin pattern matching.
 */
export class RumSdkConfigMatchOption {
  /**
   * The type of match pattern, either a literal string or a regex.
   */
  "rcSerializedType": RumSdkConfigMatchOptionSerializedType;
  /**
   * The value to match against.
   */
  "value": string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    rcSerializedType: {
      baseName: "rc_serialized_type",
      type: "RumSdkConfigMatchOptionSerializedType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "string",
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
    return RumSdkConfigMatchOption.attributeTypeMap;
  }

  public constructor() {}
}
