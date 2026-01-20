import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata for pagination
 */
export class SecurityEntityRiskScoresMeta {
  /**
   * Current page number (1-indexed)
   */
  "pageNumber": number;
  /**
   * Number of items per page
   */
  "pageSize": number;
  /**
   * Query ID for pagination consistency
   */
  "queryId": string;
  /**
   * Total number of entities matching the query
   */
  "totalRowCount": number;
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
    pageNumber: {
      baseName: "pageNumber",
      type: "number",
      required: true,
      format: "int64",
    },
    pageSize: {
      baseName: "pageSize",
      type: "number",
      required: true,
      format: "int64",
    },
    queryId: {
      baseName: "queryId",
      type: "string",
      required: true,
    },
    totalRowCount: {
      baseName: "totalRowCount",
      type: "number",
      required: true,
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
    return SecurityEntityRiskScoresMeta.attributeTypeMap;
  }

  public constructor() {}
}
