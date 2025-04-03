import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating a data deletion request.
 */
export class CreateDataDeletionRequestBodyAttributes {
  /**
   * Start of requested time window, milliseconds since Unix epoch.
   */
  "from": number;
  /**
   * List of indexes for the search. If not provided, the search is performed in all indexes.
   */
  "indexes"?: Array<string>;
  /**
   * Query for creating a data deletion request.
   */
  "query": any;
  /**
   * End of requested time window, milliseconds since Unix epoch.
   */
  "to": number;
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
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    query: {
      baseName: "query",
      type: "any",
      required: true,
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateDataDeletionRequestBodyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
