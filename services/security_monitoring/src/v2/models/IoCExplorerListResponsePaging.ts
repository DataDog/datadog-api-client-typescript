import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination information.
 */
export class IoCExplorerListResponsePaging {
  /**
   * Current pagination offset.
   */
  "offset"?: number;
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
    offset: {
      baseName: "offset",
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
    return IoCExplorerListResponsePaging.attributeTypeMap;
  }

  public constructor() {}
}
