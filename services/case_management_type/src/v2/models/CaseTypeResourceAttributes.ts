import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Case Type resource attributes
 */
export class CaseTypeResourceAttributes {
  /**
   * Timestamp of when the case type was deleted
   */
  "deletedAt"?: Date;
  /**
   * Case type description.
   */
  "description"?: string;
  /**
   * Case type emoji.
   */
  "emoji"?: string;
  /**
   * Case type name.
   */
  "name": string;
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
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    emoji: {
      baseName: "emoji",
      type: "string",
    },
    name: {
      baseName: "name",
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
    return CaseTypeResourceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
