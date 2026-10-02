import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A default property supplied by the protocol's assignment source.
 */
export class ExperimentsPublicProtocolResponseDataAttributesAssignmentSourceDefaultPropertiesItems {
  /**
   * Source column that supplies this assignment property.
   */
  "columnName"?: string;
  /**
   * Data type of the source column.
   */
  "columnType"?: string;
  /**
   * Display name of the assignment source property.
   */
  "name"?: string;
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
    columnName: {
      baseName: "column_name",
      type: "string",
    },
    columnType: {
      baseName: "column_type",
      type: "string",
    },
    name: {
      baseName: "name",
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
    return ExperimentsPublicProtocolResponseDataAttributesAssignmentSourceDefaultPropertiesItems.attributeTypeMap;
  }

  public constructor() {}
}
