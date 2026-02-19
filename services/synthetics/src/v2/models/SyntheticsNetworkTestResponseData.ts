import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsNetworkTest } from "./SyntheticsNetworkTest";
import { SyntheticsNetworkTestResponseType } from "./SyntheticsNetworkTestResponseType";

/**
 * Network Path test response data.
 */
export class SyntheticsNetworkTestResponseData {
  /**
   * Object containing details about a Network Path test.
   */
  "attributes"?: SyntheticsNetworkTest;
  /**
   * The public ID of the Network Path test.
   */
  "id"?: string;
  /**
   * Type of response, `network_test`.
   */
  "type"?: SyntheticsNetworkTestResponseType;
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
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SyntheticsNetworkTestResponseType",
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
    return SyntheticsNetworkTestResponseData.attributeTypeMap;
  }

  public constructor() {}
}
