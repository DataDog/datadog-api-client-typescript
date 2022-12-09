/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSTagFilter } from "./AWSTagFilter";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An array of tag filter rules by `namespace` and tag filter string.
 */
export class AWSTagFilterListResponse {
  /**
   * An array of tag filters.
   */
  "filters"?: Array<AWSTagFilter>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    filters: {
      baseName: "filters",
      type: "Array<AWSTagFilter>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSTagFilterListResponse.attributeTypeMap;
  }

  public constructor() {}
}
