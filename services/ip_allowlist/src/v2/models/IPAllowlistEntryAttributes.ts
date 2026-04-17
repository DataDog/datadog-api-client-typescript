import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the IP allowlist entry.
 */
export class IPAllowlistEntryAttributes {
  /**
   * The CIDR block describing the IP range of the entry.
   */
  "cidrBlock"?: string;
  /**
   * Creation time of the entry.
   */
  "createdAt"?: Date;
  /**
   * A label for the IP allowlist entry.
   */
  "label"?: string;
  /**
   * Time of last entry modification.
   */
  "modifiedAt"?: Date;
  /**
   * A note describing the IP allowlist entry.
   */
  "note"?: string;
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
    cidrBlock: {
      baseName: "cidr_block",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    label: {
      baseName: "label",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    note: {
      baseName: "note",
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
    return IPAllowlistEntryAttributes.attributeTypeMap;
  }

  public constructor() {}
}
