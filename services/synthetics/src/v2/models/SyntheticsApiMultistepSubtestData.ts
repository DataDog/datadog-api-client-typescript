import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsApiMultistepSubtestAttributes } from "./SyntheticsApiMultistepSubtestAttributes";
import { SyntheticsApiMultistepSubtestType } from "./SyntheticsApiMultistepSubtestType";

/**
 * Data object for a Synthetic API multistep subtest.
 */
export class SyntheticsApiMultistepSubtestData {
  /**
   * Attributes of a Synthetic API multistep subtest.
   */
  "attributes"?: SyntheticsApiMultistepSubtestAttributes;
  /**
   * The public ID of the subtest.
   */
  "id"?: string;
  /**
   * Type of the subtest resource.
   */
  "type"?: SyntheticsApiMultistepSubtestType;
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
      type: "SyntheticsApiMultistepSubtestAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SyntheticsApiMultistepSubtestType",
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
    return SyntheticsApiMultistepSubtestData.attributeTypeMap;
  }

  public constructor() {}
}
