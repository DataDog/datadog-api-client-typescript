/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Certificate details returned in an OCSP response.
 */
export class SyntheticsTestResultOCSPCertificate {
  /**
   * Reason code for the revocation, when applicable.
   */
  "revocationReason"?: string;
  /**
   * Unix timestamp (ms) of the revocation.
   */
  "revocationTime"?: number;
  /**
   * Serial number of the certificate.
   */
  "serialNumber"?: string;

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
    revocationReason: {
      baseName: "revocation_reason",
      type: "string",
    },
    revocationTime: {
      baseName: "revocation_time",
      type: "number",
      format: "int64",
    },
    serialNumber: {
      baseName: "serial_number",
      type: "string",
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
    return SyntheticsTestResultOCSPCertificate.attributeTypeMap;
  }

  public constructor() {}
}
