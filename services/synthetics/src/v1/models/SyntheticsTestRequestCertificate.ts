import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestRequestCertificateItem } from "./SyntheticsTestRequestCertificateItem";

/**
 * Client certificate to use when performing the test request.
 */
export class SyntheticsTestRequestCertificate {
  /**
   * Define a request certificate.
   */
  "cert"?: SyntheticsTestRequestCertificateItem;
  /**
   * Define a request certificate.
   */
  "key"?: SyntheticsTestRequestCertificateItem;
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
    cert: {
      baseName: "cert",
      type: "SyntheticsTestRequestCertificateItem",
    },
    key: {
      baseName: "key",
      type: "SyntheticsTestRequestCertificateItem",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestRequestCertificate.attributeTypeMap;
  }

  public constructor() {}
}
