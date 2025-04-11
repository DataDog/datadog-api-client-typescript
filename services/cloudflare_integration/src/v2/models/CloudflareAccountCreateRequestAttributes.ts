import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes object for creating a Cloudflare account.
 */
export class CloudflareAccountCreateRequestAttributes {
  /**
   * The API key (or token) for the Cloudflare account.
   */
  "apiKey": string;
  /**
   * The email associated with the Cloudflare account. If an API key is provided (and not a token), this field is also required.
   */
  "email"?: string;
  /**
   * The name of the Cloudflare account.
   */
  "name": string;
  /**
   * An allowlist of resources to restrict pulling metrics for including `'web', 'dns', 'lb' (load balancer), 'worker'`.
   */
  "resources"?: Array<string>;
  /**
   * An allowlist of zones to restrict pulling metrics for.
   */
  "zones"?: Array<string>;
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
    apiKey: {
      baseName: "api_key",
      type: "string",
      required: true,
    },
    email: {
      baseName: "email",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    resources: {
      baseName: "resources",
      type: "Array<string>",
    },
    zones: {
      baseName: "zones",
      type: "Array<string>",
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
    return CloudflareAccountCreateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
