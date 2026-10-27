/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ArchiveSearchRehydrationTier } from "./ArchiveSearchRehydrationTier";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
