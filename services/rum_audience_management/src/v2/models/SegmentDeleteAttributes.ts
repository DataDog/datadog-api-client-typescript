import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SegmentUser } from "./SegmentUser";

/**
 * Attributes of a deleted segment.
 */
export class SegmentDeleteAttributes {
  /**
   * Time the segment was deleted.
   */
  "disabledAt": Date;
  /**
   * A Datadog user who created, modified, or disabled a segment.
   */
  "disabledBy"?: SegmentUser;
  /**
   * Name of the segment.
   */
  "name": string;
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
    disabledAt: {
      baseName: "disabled_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    disabledBy: {
      baseName: "disabled_by",
      type: "SegmentUser",
    },
    name: {
      baseName: "name",
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
    return SegmentDeleteAttributes.attributeTypeMap;
  }

  public constructor() {}
}
