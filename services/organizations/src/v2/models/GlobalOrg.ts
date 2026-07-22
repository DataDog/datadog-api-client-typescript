import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Organization information for a global organization association.
 */
export class GlobalOrg {
  /**
   * The name of the organization.
   */
  "name": string;
  /**
   * The public identifier of the organization.
   */
  "publicId"?: string;
  /**
   * The subdomain used to access the organization, if configured.
   */
  "subdomain"?: string;
  /**
   * The UUID of the organization.
   */
  "uuid": string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    subdomain: {
      baseName: "subdomain",
      type: "string",
    },
    uuid: {
      baseName: "uuid",
      type: "string",
      required: true,
      format: "uuid",
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
    return GlobalOrg.attributeTypeMap;
  }

  public constructor() {}
}
