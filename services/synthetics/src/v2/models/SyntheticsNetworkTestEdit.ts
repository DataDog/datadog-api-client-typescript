import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsNetworkTest } from "./SyntheticsNetworkTest";
import { SyntheticsNetworkTestType } from "./SyntheticsNetworkTestType";

export class SyntheticsNetworkTestEdit {
  /**
   * Object containing details about a Network Path test.
   */
  "attributes": SyntheticsNetworkTest;
  /**
   * Type of the Synthetic test, `network`.
   */
  "type": SyntheticsNetworkTestType;
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
      type: "SyntheticsNetworkTest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SyntheticsNetworkTestType",
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
    return SyntheticsNetworkTestEdit.attributeTypeMap;
  }

  public constructor() {}
}
