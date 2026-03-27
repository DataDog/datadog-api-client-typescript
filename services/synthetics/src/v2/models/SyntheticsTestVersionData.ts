import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestVersionAttributes } from "./SyntheticsTestVersionAttributes";
import { SyntheticsTestVersionType } from "./SyntheticsTestVersionType";

/**
 * Data object for a specific Synthetic test version.
 */
export class SyntheticsTestVersionData {
  /**
   * Attributes of a specific Synthetic test version.
   */
  "attributes"?: SyntheticsTestVersionAttributes;
  /**
   * UUID of the version record.
   */
  "id"?: string;
  /**
   * Type of the version resource.
   */
  "type"?: SyntheticsTestVersionType;
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
      type: "SyntheticsTestVersionAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SyntheticsTestVersionType",
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
    return SyntheticsTestVersionData.attributeTypeMap;
  }

  public constructor() {}
}
