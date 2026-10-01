import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArchiveSearchRehydrationTier } from "./ArchiveSearchRehydrationTier";

/**
 * Rehydration settings of the Archive Search. Absent when the search only scans the archive
 * without indexing the results.
 */
export class ArchiveSearchRehydration {
  /**
   * Maximum number of events to rehydrate.
   */
  "maxRehydratedEvents": number;
  /**
   * Number of days the rehydrated logs are retained for.
   */
  "retentionDays": number;
  /**
   * Storage tier the matched logs are rehydrated into.
   */
  "tier": ArchiveSearchRehydrationTier;
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
    maxRehydratedEvents: {
      baseName: "max_rehydrated_events",
      type: "number",
      required: true,
      format: "int64",
    },
    retentionDays: {
      baseName: "retention_days",
      type: "number",
      required: true,
      format: "int64",
    },
    tier: {
      baseName: "tier",
      type: "ArchiveSearchRehydrationTier",
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
    return ArchiveSearchRehydration.attributeTypeMap;
  }

  public constructor() {}
}
