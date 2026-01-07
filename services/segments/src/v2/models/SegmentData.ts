import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SegmentDataAttributes } from "./SegmentDataAttributes";
import { SegmentDataType } from "./SegmentDataType";

export class SegmentData {
  "attributes"?: SegmentDataAttributes;
  "id"?: string;
  "type": SegmentDataType;
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
      type: "SegmentDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SegmentDataType",
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
    return SegmentData.attributeTypeMap;
  }

  public constructor() {}
}
