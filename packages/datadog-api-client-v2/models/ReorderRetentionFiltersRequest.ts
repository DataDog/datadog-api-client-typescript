/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RetentionFilterWithoutAttributes } from "./RetentionFilterWithoutAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A list of retention filters to reorder.
 */
export class ReorderRetentionFiltersRequest {
  /**
   * A list of retention filters objects.
   */
  "data": Array<RetentionFilterWithoutAttributes>;

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
      type: "Array<RetentionFilterWithoutAttributes>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ReorderRetentionFiltersRequest.attributeTypeMap;
  }

  public constructor() {}
}
