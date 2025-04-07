import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListFindingsPage } from "./ListFindingsPage";

/**
 * Metadata for pagination.
 */
export class ListFindingsMeta {
  /**
   * Pagination and findings count information.
   */
  "page"?: ListFindingsPage;
  /**
   * The point in time corresponding to the listed findings.
   */
  "snapshotTimestamp"?: number;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    page: {
      baseName: "page",
      type: "ListFindingsPage",
    },
    snapshotTimestamp: {
      baseName: "snapshot_timestamp",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ListFindingsMeta.attributeTypeMap;
  }

  public constructor() {}
}
