import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestVersionChangeAttributes } from "./SyntheticsTestVersionChangeAttributes";
import { SyntheticsTestVersionChangeType } from "./SyntheticsTestVersionChangeType";

/**
 * Data object for a version change record.
 */
export class SyntheticsTestVersionChangeData {
  /**
   * Attributes of a version change record.
   */
  "attributes"?: SyntheticsTestVersionChangeAttributes;
  /**
   * UUID of the version change record.
   */
  "id"?: string;
  /**
   * Type of the version metadata resource.
   */
  "type"?: SyntheticsTestVersionChangeType;
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
      type: "SyntheticsTestVersionChangeAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SyntheticsTestVersionChangeType",
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
    return SyntheticsTestVersionChangeData.attributeTypeMap;
  }

  public constructor() {}
}
