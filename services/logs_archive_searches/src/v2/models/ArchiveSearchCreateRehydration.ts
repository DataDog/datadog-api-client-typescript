import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArchiveSearchRehydrationTier } from "./ArchiveSearchRehydrationTier";

/**
 * Rehydration settings. Include this object to index the matched logs into a retained historical view.
 * Omit it to run an Archive Search that only scans the archive.
 */
export class ArchiveSearchCreateRehydration {
  /**
   * Maximum number of events to rehydrate. The organization's reindexing limit is configured
   * in millions, so this value is at least 1,000,000.
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
    return ArchiveSearchCreateRehydration.attributeTypeMap;
  }

  public constructor() {}
}
