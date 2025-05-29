import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Relation metadata.
 */
export class RelationMeta {
  /**
   * Relation creation time.
   */
  "createdAt"?: Date;
  /**
   * Relation defined by.
   */
  "definedBy"?: string;
  /**
   * Relation modification time.
   */
  "modifiedAt"?: Date;
  /**
   * Relation source.
   */
  "source"?: string;
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
    createdAt: {
      baseName: "createdAt",
      type: "Date",
      format: "date-time",
    },
    definedBy: {
      baseName: "definedBy",
      type: "string",
    },
    modifiedAt: {
      baseName: "modifiedAt",
      type: "Date",
      format: "date-time",
    },
    source: {
      baseName: "source",
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
    return RelationMeta.attributeTypeMap;
  }

  public constructor() {}
}
