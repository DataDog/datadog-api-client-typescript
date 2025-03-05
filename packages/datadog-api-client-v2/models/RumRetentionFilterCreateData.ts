/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumRetentionFilterCreateAttributes } from "./RumRetentionFilterCreateAttributes";
import { RumRetentionFilterMeta } from "./RumRetentionFilterMeta";
import { RumRetentionFilterType } from "./RumRetentionFilterType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The new RUM retention filter properties to create.
 */
export class RumRetentionFilterCreateData {
  /**
   * The object describing attributes of a RUM retention filter to create.
   */
  "attributes": RumRetentionFilterCreateAttributes;
  /**
   * The object describing metadata of a RUM retention filter.
   */
  "meta"?: RumRetentionFilterMeta;
  /**
   * The type of the resource. The value should always be retention_filters.
   */
  "type": RumRetentionFilterType;

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
      type: "RumRetentionFilterCreateAttributes",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RumRetentionFilterMeta",
    },
    type: {
      baseName: "type",
      type: "RumRetentionFilterType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RumRetentionFilterCreateData.attributeTypeMap;
  }

  public constructor() {}
}
