/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumCrossProductSampling } from "./RumCrossProductSampling";
import { RumPermanentRetentionFilterEditability } from "./RumPermanentRetentionFilterEditability";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a permanent RUM retention filter.
 */
export class RumPermanentRetentionFilterAttributes {
  /**
   * The configuration for cross-product retention filters.
   */
  "crossProductSampling"?: RumCrossProductSampling;
  /**
   * A description of what the filter retains.
   */
  "description"?: string;
  /**
   * Indicates which cross-product fields of a permanent RUM retention filter can be updated.
   */
  "editability"?: RumPermanentRetentionFilterEditability;
  /**
   * The display name of the permanent retention filter.
   */
  "name"?: string;

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
    crossProductSampling: {
      baseName: "cross_product_sampling",
      type: "RumCrossProductSampling",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    editability: {
      baseName: "editability",
      type: "RumPermanentRetentionFilterEditability",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return RumPermanentRetentionFilterAttributes.attributeTypeMap;
  }

  public constructor() {}
}
