import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * OpenID Connect provider metadata.
 */
export class OIDCDiscoveryDocument {
  /**
   * URL of the OAuth2 authorization endpoint.
   */
  "authorizationEndpoint": string;
  /**
   * Signing algorithms supported for ID tokens.
   */
  "idTokenSigningAlgValuesSupported": Array<string>;
  /**
   * URL identifying the OpenID Connect issuer.
   */
  "issuer": string;
  /**
   * URL of the JSON Web Key Set used to verify ID token signatures.
   */
  "jwksUri": string;
  /**
   * OAuth2 response types supported by the provider.
   */
  "responseTypesSupported": Array<string>;
  /**
   * Subject identifier types supported by the provider.
   */
  "subjectTypesSupported": Array<string>;
  /**
   * URL of the OAuth2 token endpoint.
   */
  "tokenEndpoint": string;
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
    authorizationEndpoint: {
      baseName: "authorization_endpoint",
      type: "string",
      required: true,
    },
    idTokenSigningAlgValuesSupported: {
      baseName: "id_token_signing_alg_values_supported",
      type: "Array<string>",
      required: true,
    },
    issuer: {
      baseName: "issuer",
      type: "string",
      required: true,
    },
    jwksUri: {
      baseName: "jwks_uri",
      type: "string",
      required: true,
    },
    responseTypesSupported: {
      baseName: "response_types_supported",
      type: "Array<string>",
      required: true,
    },
    subjectTypesSupported: {
      baseName: "subject_types_supported",
      type: "Array<string>",
      required: true,
    },
    tokenEndpoint: {
      baseName: "token_endpoint",
      type: "string",
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
    return OIDCDiscoveryDocument.attributeTypeMap;
  }

  public constructor() {}
}
