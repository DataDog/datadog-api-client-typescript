import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A fixed list of users uploaded to Datadog.
 */
export class SegmentStaticBlock {
  /**
   * ID of the uploaded list.
   */
  "id"?: string;
  /**
   * Name of the block, used in `combination`.
   */
  "name"?: string;
  /**
   * Number of users in the list.
   */
  "userCount"?: number;
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
    id: {
      baseName: "id",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    userCount: {
      baseName: "user_count",
      type: "number",
      format: "int64",
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
    return SegmentStaticBlock.attributeTypeMap;
  }

  public constructor() {}
}
