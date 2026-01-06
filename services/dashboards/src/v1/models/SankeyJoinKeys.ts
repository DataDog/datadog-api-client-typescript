import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Join keys.
 */
export class SankeyJoinKeys {
  /**
   * Primary join key.
   */
  "primary": string;
  /**
   * Secondary join keys.
   */
  "secondary"?: Array<string>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    primary: {
      baseName: "primary",
      type: "string",
      required: true,
    },
    secondary: {
      baseName: "secondary",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SankeyJoinKeys.attributeTypeMap;
  }

  public constructor() {}
}
