/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumHardcodedRetentionFilterType } from "./RumHardcodedRetentionFilterType";
import { RumHardcodedRetentionFilterUpdateAttributes } from "./RumHardcodedRetentionFilterUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The hardcoded retention filter properties to update.
 */
export class RumHardcodedRetentionFilterUpdateData {
  /**
   * The attributes of a hardcoded retention filter that can be updated.
   * Only fields whose matching flag in `cross_product_sampling_editability` is `true` can be modified.
   */
  "attributes": RumHardcodedRetentionFilterUpdateAttributes;
  /**
   * The ID of the hardcoded retention filter. Must match the `rf_id` path parameter.
   */
  "id": string;
  /**
   * The resource type. The value must be `hardcoded_retention_filters`.
   */
  "type": RumHardcodedRetentionFilterType;

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
      type: "RumHardcodedRetentionFilterUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumHardcodedRetentionFilterType",
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
    return RumHardcodedRetentionFilterUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
