/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FeatureFlag } from "./FeatureFlag";
import { FeatureFlagsPaginationMeta } from "./FeatureFlagsPaginationMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a list of feature flags.
 */
export class ListFeatureFlagsResponse {
  /**
   * List of feature flags.
   */
  "data": Array<FeatureFlag>;
  /**
   * Pagination metadata for feature flags.
   */
  "meta"?: FeatureFlagsPaginationMeta;

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
    data: {
      baseName: "data",
      type: "Array<FeatureFlag>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "FeatureFlagsPaginationMeta",
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
    return ListFeatureFlagsResponse.attributeTypeMap;
  }

  public constructor() {}
}
