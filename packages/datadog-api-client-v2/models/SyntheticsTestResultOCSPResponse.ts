/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestResultOCSPCertificate } from "./SyntheticsTestResultOCSPCertificate";
import { SyntheticsTestResultOCSPUpdates } from "./SyntheticsTestResultOCSPUpdates";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
