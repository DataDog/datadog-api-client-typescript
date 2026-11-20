import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AuditStreamQuery20270101Sort } from "./AuditStreamQuery20270101Sort";
import { AuditStreamQueryDataSource } from "./AuditStreamQueryDataSource";
import { EventsContext } from "./EventsContext";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class AuditStreamQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "context"?: EventsContext;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": AuditStreamQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "indexes"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryString": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: AuditStreamQuery20270101Sort;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    context: {
      baseName: "context",
      type: "EventsContext",
    },
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    dataSource: {
      baseName: "data_source",
      type: "AuditStreamQueryDataSource",
      required: true,
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "AuditStreamQuery20270101Sort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuditStreamQuery.attributeTypeMap;
  }

  public constructor() {}
}
