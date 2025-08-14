import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HTTPMtlsAuthType } from "./HTTPMtlsAuthType";

/**
 * The definition of the `HTTPMtlsAuth` object.
 */
export class HTTPMtlsAuthUpdate {
  /**
   * Certificate of authority used to sign the request.
   */
  "certificate"?: string;
  /**
   * Private key used for the MTLS handshake
   */
  "privateKey"?: string;
  /**
   * The definition of the `HTTPMtlsAuth` object.
   */
  "type": HTTPMtlsAuthType;
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
      type: "string",
    },
    privateKey: {
      baseName: "private_key",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "HTTPMtlsAuthType",
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
    return HTTPMtlsAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
