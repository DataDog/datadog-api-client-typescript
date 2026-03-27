import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestParentSuiteAttributes } from "./SyntheticsTestParentSuiteAttributes";
import { SyntheticsTestParentSuiteType } from "./SyntheticsTestParentSuiteType";

/**
 * Data object for a parent suite.
 */
export class SyntheticsTestParentSuiteData {
  /**
   * Object containing details about a parent suite of a Synthetic test.
   */
  "attributes"?: SyntheticsTestParentSuiteAttributes;
  /**
   * The public ID of the parent suite.
   */
  "id"?: string;
  /**
   * Type of the parent suite resource.
   */
  "type"?: SyntheticsTestParentSuiteType;
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
      type: "SyntheticsTestParentSuiteAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SyntheticsTestParentSuiteType",
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
    return SyntheticsTestParentSuiteData.attributeTypeMap;
  }

  public constructor() {}
}
