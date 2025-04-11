import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a full API key.
 */
export class FullAPIKeyAttributes {
  /**
   * The category of the API key.
   */
  "category"?: string;
  /**
   * Creation date of the API key.
   */
  "createdAt"?: Date;
  /**
   * The API key.
   */
  "key"?: string;
  /**
   * The last four characters of the API key.
   */
  "last4"?: string;
  /**
   * Date the API key was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * Name of the API key.
   */
  "name"?: string;
  /**
   * The remote config read enabled status.
   */
  "remoteConfigReadEnabled"?: boolean;
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
    category: {
      baseName: "category",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    key: {
      baseName: "key",
      type: "string",
    },
    last4: {
      baseName: "last4",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    remoteConfigReadEnabled: {
      baseName: "remote_config_read_enabled",
      type: "boolean",
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
    return FullAPIKeyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
