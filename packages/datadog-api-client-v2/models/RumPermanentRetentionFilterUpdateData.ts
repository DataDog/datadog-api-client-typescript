/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumPermanentRetentionFilterType } from "./RumPermanentRetentionFilterType";
import { RumPermanentRetentionFilterUpdateAttributes } from "./RumPermanentRetentionFilterUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The permanent retention filter properties to update.
 */
export class RumPermanentRetentionFilterUpdateData {
  /**
   * The attributes of a permanent retention filter that can be updated.
   */
  "attributes": RumPermanentRetentionFilterUpdateAttributes;
  /**
   * Permanent retention filter ID.
   */
  "id": string;
  /**
   * The resource type. The value must be `permanent_retention_filters`.
   */
  "type": RumPermanentRetentionFilterType;

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
      type: "RumPermanentRetentionFilterUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumPermanentRetentionFilterType",
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
    return RumPermanentRetentionFilterUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
