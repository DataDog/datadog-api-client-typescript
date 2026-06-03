/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumHardcodedRetentionFilterAttributes } from "./RumHardcodedRetentionFilterAttributes";
import { RumHardcodedRetentionFilterMeta } from "./RumHardcodedRetentionFilterMeta";
import { RumHardcodedRetentionFilterType } from "./RumHardcodedRetentionFilterType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A hardcoded retention filter.
 */
export class RumHardcodedRetentionFilterData {
  /**
   * The attributes of a hardcoded retention filter.
   */
  "attributes"?: RumHardcodedRetentionFilterAttributes;
  /**
   * The ID of the hardcoded retention filter.
   */
  "id"?: string;
  /**
   * Metadata about the hardcoded retention filter.
   */
  "meta"?: RumHardcodedRetentionFilterMeta;
  /**
   * The resource type. The value must be `hardcoded_retention_filters`.
   */
  "type"?: RumHardcodedRetentionFilterType;

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
      type: "RumHardcodedRetentionFilterAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    meta: {
      baseName: "meta",
      type: "RumHardcodedRetentionFilterMeta",
    },
    type: {
      baseName: "type",
      type: "RumHardcodedRetentionFilterType",
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
    return RumHardcodedRetentionFilterData.attributeTypeMap;
  }

  public constructor() {}
}
