import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `ListAppKeyRegistrationsResponseMeta` object.
 */
export class ListAppKeyRegistrationsResponseMeta {
  /**
   * The total number of app key registrations.
   */
  "total"?: number;
  /**
   * The total number of app key registrations that match the specified filters.
   */
  "totalFiltered"?: number;
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
    total: {
      baseName: "total",
      type: "number",
      format: "int64",
    },
    totalFiltered: {
      baseName: "total_filtered",
      type: "number",
      format: "int64",
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
    return ListAppKeyRegistrationsResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
