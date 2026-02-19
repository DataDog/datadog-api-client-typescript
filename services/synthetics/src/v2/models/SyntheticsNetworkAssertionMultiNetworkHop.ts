import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsNetworkAssertionMultiNetworkHopType } from "./SyntheticsNetworkAssertionMultiNetworkHopType";
import { SyntheticsNetworkAssertionOperator } from "./SyntheticsNetworkAssertionOperator";
import { SyntheticsNetworkAssertionProperty } from "./SyntheticsNetworkAssertionProperty";

/**
 * Multi-network hop assertion for a Network Path test.
 */
export class SyntheticsNetworkAssertionMultiNetworkHop {
  /**
   * Assertion operator to apply.
   */
  "operator": SyntheticsNetworkAssertionOperator;
  /**
   * The associated assertion property.
   */
  "property": SyntheticsNetworkAssertionProperty;
  /**
   * Target value in number of hops.
   */
  "target": number;
  /**
   * Type of the multi-network hop assertion.
   */
  "type": SyntheticsNetworkAssertionMultiNetworkHopType;
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
    operator: {
      baseName: "operator",
      type: "SyntheticsNetworkAssertionOperator",
      required: true,
    },
    property: {
      baseName: "property",
      type: "SyntheticsNetworkAssertionProperty",
      required: true,
    },
    target: {
      baseName: "target",
      type: "number",
      required: true,
      format: "double",
    },
    type: {
      baseName: "type",
      type: "SyntheticsNetworkAssertionMultiNetworkHopType",
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
    return SyntheticsNetworkAssertionMultiNetworkHop.attributeTypeMap;
  }

  public constructor() {}
}
