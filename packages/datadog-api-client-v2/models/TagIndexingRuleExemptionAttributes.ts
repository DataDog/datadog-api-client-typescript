/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagIndexingRuleExemptionVolumeStatus } from "./TagIndexingRuleExemptionVolumeStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a tag indexing rule exemption.
 */
export class TagIndexingRuleExemptionAttributes {
  /**
   * Timestamp when the exemption was created.
   */
  "createdAt"?: Date;
  /**
   * Handle of the user who created the exemption.
   */
  "createdByHandle"?: string;
  /**
   * Estimated change in indexed cardinality or points if the exemption is removed and the matching tag indexing
   * rule applies to the metric. A negative value indicates a reduction in indexed volume, a positive value
   * indicates an increase, and zero indicates no change. A `null` value indicates that the estimate is unavailable.
   */
  "estimatedChangeInVolume"?: number;
  /**
   * Discriminates between an explicit exemption (`exemption`) and a pre-existing legacy tag configuration acting as an implicit exclusion (`legacy_tag_configuration`).
   */
  "kind"?: string;
  /**
   * Tag keys used to query this metric in monitors, dashboards, notebooks, and SLOs that the matching rule would
   * remove or not include if the exemption is removed.
   */
  "missingIndexedTags"?: Array<string>;
  /**
   * The reason the metric is exempt from tag indexing rules.
   */
  "reason"?: string;
  /**
   * Indicates whether `estimated_change_in_volume` is available and, if not, why. `ok` indicates a fresh estimate.
   * `unindexed_tags` indicates that the matching rule uses tags that are not indexed for the metric.
   * `unavailable` indicates that the estimate is stale, was not computed, or could not be retrieved.
   */
  "volumeStatus"?: TagIndexingRuleExemptionVolumeStatus;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    createdByHandle: {
      baseName: "created_by_handle",
      type: "string",
    },
    estimatedChangeInVolume: {
      baseName: "estimated_change_in_volume",
      type: "number",
      format: "int64",
    },
    kind: {
      baseName: "kind",
      type: "string",
    },
    missingIndexedTags: {
      baseName: "missing_indexed_tags",
      type: "Array<string>",
    },
    reason: {
      baseName: "reason",
      type: "string",
    },
    volumeStatus: {
      baseName: "volume_status",
      type: "TagIndexingRuleExemptionVolumeStatus",
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
    return TagIndexingRuleExemptionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
