import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The metadata of the data deletion response.
 */
export class DataDeletionResponseMeta {
  /**
   * The total deletion requests created by product.
   */
  "countProduct"?: { [key: string]: number };
  /**
   * The total deletion requests created by status.
   */
  "countStatus"?: { [key: string]: number };
  /**
   * The next page when searching deletion requests created in the current organization.
   */
  "nextPage"?: string;
  /**
   * The product of the deletion request.
   */
  "product"?: string;
  /**
   * The status of the executed request.
   */
  "requestStatus"?: string;
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
    countProduct: {
      baseName: "count_product",
      type: "{ [key: string]: number; }",
    },
    countStatus: {
      baseName: "count_status",
      type: "{ [key: string]: number; }",
    },
    nextPage: {
      baseName: "next_page",
      type: "string",
    },
    product: {
      baseName: "product",
      type: "string",
    },
    requestStatus: {
      baseName: "request_status",
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
    return DataDeletionResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
