import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Included related entity meta.
 */
export class EntityResponseIncludedRelatedEntityMeta {
  /**
   * Entity creation time.
   */
  "createdAt"?: Date;
  /**
   * Entity relation defined by.
   */
  "definedBy"?: string;
  /**
   * Entity modification time.
   */
  "modifiedAt"?: Date;
  /**
   * Entity relation source.
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
      baseName: "defined_by",
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
    return EntityResponseIncludedRelatedEntityMeta.attributeTypeMap;
  }

  public constructor() {}
}
