import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata for a list of RUM operation strong links.
 */
export class RUMOperationStrongLinksListResponseMeta {
  /**
   * The pagination limit.
   */
  "limit"?: number;
  /**
   * The current offset.
   */
  "offset"?: number;
  /**
   * The total number of strong links matching the request.
   */
  "total"?: number;
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
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    offset: {
      baseName: "offset",
      type: "number",
      format: "int64",
    },
    total: {
      baseName: "total",
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
    return RUMOperationStrongLinksListResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
