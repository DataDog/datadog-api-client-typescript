import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultRequestInfo } from "./SyntheticsTestResultRequestInfo";
import { SyntheticsTestResultResponseInfo } from "./SyntheticsTestResultResponseInfo";

/**
 * Handshake request and response for protocol-level tests.
 */
export class SyntheticsTestResultHandshake {
  /**
   * Details of the outgoing request made during the test execution.
   */
  "request"?: SyntheticsTestResultRequestInfo;
  /**
   * Details of the response received during the test execution.
   */
  "response"?: SyntheticsTestResultResponseInfo;
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
    request: {
      baseName: "request",
      type: "SyntheticsTestResultRequestInfo",
    },
    response: {
      baseName: "response",
      type: "SyntheticsTestResultResponseInfo",
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
    return SyntheticsTestResultHandshake.attributeTypeMap;
  }

  public constructor() {}
}
