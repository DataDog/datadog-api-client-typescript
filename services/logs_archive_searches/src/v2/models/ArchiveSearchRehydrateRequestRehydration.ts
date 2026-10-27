import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ArchiveSearchRehydrationTier } from "./ArchiveSearchRehydrationTier";

/**
 * Rehydration settings to apply.
 */
export class ArchiveSearchRehydrateRequestRehydration {
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
    return ArchiveSearchRehydrateRequestRehydration.attributeTypeMap;
  }

  public constructor() {}
}
