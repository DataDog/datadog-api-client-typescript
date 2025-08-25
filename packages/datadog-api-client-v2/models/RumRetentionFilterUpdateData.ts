/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumRetentionFilterType } from "./RumRetentionFilterType";
import { RumRetentionFilterUpdateAttributes } from "./RumRetentionFilterUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The new RUM retention filter properties to update.
 */
export class RumRetentionFilterUpdateData {
  /**
   * The object describing attributes of a RUM retention filter to update.
   */
  "attributes": RumRetentionFilterUpdateAttributes;
  /**
   * ID of retention filter in UUID.
   */
  "id": string;
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
      type: "RumRetentionFilterUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
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
    return RumRetentionFilterUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
