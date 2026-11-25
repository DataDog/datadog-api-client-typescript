import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType } from "./ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType";
import { ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat } from "./ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ScatterplotBackendTableRequest20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "ddsqlQuery": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    ddsqlQuery: {
      baseName: "ddsql_query",
      type: "string",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScatterplotBackendTableRequest20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
