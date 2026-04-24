import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultOCSPCertificate } from "./SyntheticsTestResultOCSPCertificate";
import { SyntheticsTestResultOCSPUpdates } from "./SyntheticsTestResultOCSPUpdates";

/**
 * OCSP response received while validating a certificate.
 */
export class SyntheticsTestResultOCSPResponse {
  /**
   * Certificate details returned in an OCSP response.
   */
  "certificate"?: SyntheticsTestResultOCSPCertificate;
  /**
   * OCSP response status (for example, `good`, `revoked`, `unknown`).
   */
  "status"?: string;
  /**
   * OCSP response update timestamps.
   */
  "updates"?: SyntheticsTestResultOCSPUpdates;
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
    certificate: {
      baseName: "certificate",
      type: "SyntheticsTestResultOCSPCertificate",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    updates: {
      baseName: "updates",
      type: "SyntheticsTestResultOCSPUpdates",
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
    return SyntheticsTestResultOCSPResponse.attributeTypeMap;
  }

  public constructor() {}
}
