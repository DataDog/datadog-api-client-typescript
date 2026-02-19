import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsNetworkTestEdit } from "./SyntheticsNetworkTestEdit";

/**
 * Network Path test request.
 */
export class SyntheticsNetworkTestEditRequest {
  "data": SyntheticsNetworkTestEdit;
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
    data: {
      baseName: "data",
      type: "SyntheticsNetworkTestEdit",
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
    return SyntheticsNetworkTestEditRequest.attributeTypeMap;
  }

  public constructor() {}
}
