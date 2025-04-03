import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An application key with its associated metadata.
 */
export class ApplicationKey {
  /**
   * Hash of an application key.
   */
  "hash"?: string;
  /**
   * Name of an application key.
   */
  "name"?: string;
  /**
   * Owner of an application key.
   */
  "owner"?: string;
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
    hash: {
      baseName: "hash",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    owner: {
      baseName: "owner",
      type: "string",
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
    return ApplicationKey.attributeTypeMap;
  }

  public constructor() {}
}
