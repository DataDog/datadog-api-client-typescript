import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes describing which previously submitted DDSQL query to fetch.
 */
export class DdsqlTabularQueryFetchRequestAttributes {
  /**
   * Opaque token returned by an earlier execute or fetch response that carried
   * `state: running`. Identifies the query to poll for results.
   */
  "queryId": string;
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
    queryId: {
      baseName: "query_id",
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
    return DdsqlTabularQueryFetchRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
