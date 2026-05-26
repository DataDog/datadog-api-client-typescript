/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumPermanentRetentionFilterAttributes } from "./RumPermanentRetentionFilterAttributes";
import { RumPermanentRetentionFilterMeta } from "./RumPermanentRetentionFilterMeta";
import { RumPermanentRetentionFilterType } from "./RumPermanentRetentionFilterType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A permanent retention filter.
 */
export class RumPermanentRetentionFilterData {
  /**
   * The attributes of a permanent retention filter.
   */
  "attributes"?: RumPermanentRetentionFilterAttributes;
  /**
   * Permanent retention filter ID.
   */
  "id"?: string;
  /**
   * Metadata about the permanent retention filter.
   */
  "meta"?: RumPermanentRetentionFilterMeta;
  /**
   * The resource type. The value must be `permanent_retention_filters`.
   */
  "type"?: RumPermanentRetentionFilterType;

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
    attributes: {
      baseName: "attributes",
      type: "RumPermanentRetentionFilterAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    meta: {
      baseName: "meta",
      type: "RumPermanentRetentionFilterMeta",
    },
    type: {
      baseName: "type",
      type: "RumPermanentRetentionFilterType",
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
    return RumPermanentRetentionFilterData.attributeTypeMap;
  }

  public constructor() {}
}
