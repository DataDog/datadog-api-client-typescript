import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Define a request certificate.
 */
export class SyntheticsTestRequestCertificateItem {
  /**
   * Content of the certificate or key.
   */
  "content"?: string;
  /**
   * File name for the certificate or key.
   */
  "filename"?: string;
  /**
   * Date of update of the certificate or key, ISO format.
   */
  "updatedAt"?: string;
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
    content: {
      baseName: "content",
      type: "string",
    },
    filename: {
      baseName: "filename",
      type: "string",
    },
    updatedAt: {
      baseName: "updatedAt",
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
    return SyntheticsTestRequestCertificateItem.attributeTypeMap;
  }

  public constructor() {}
}
