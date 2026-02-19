import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A static user list entry within a segment data query.
 */
export class RumSegmentStaticEntry {
  /**
   * The identifier of the static list.
   */
  "id": string;
  /**
   * The name of the static list.
   */
  "name": string;
  /**
   * The number of users in the static list.
   */
  "userCount": number;
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
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    userCount: {
      baseName: "user_count",
      type: "number",
      required: true,
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
    return RumSegmentStaticEntry.attributeTypeMap;
  }

  public constructor() {}
}
