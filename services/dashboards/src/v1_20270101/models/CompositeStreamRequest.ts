import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CompositeStreamRequestColumn } from "./CompositeStreamRequestColumn";
import { CompositeStreamRequestRequestType } from "./CompositeStreamRequestRequestType";
import { ListCompositeQuery } from "./ListCompositeQuery";
import { ListStreamSort } from "./ListStreamSort";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CompositeStreamRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<CompositeStreamRequestColumn>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": ListCompositeQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": CompositeStreamRequestRequestType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: ListStreamSort;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<CompositeStreamRequestColumn>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "ListCompositeQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "CompositeStreamRequestRequestType",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "ListStreamSort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CompositeStreamRequest.attributeTypeMap;
  }

  public constructor() {}
}
