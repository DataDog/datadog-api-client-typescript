/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RetentionFilterUpdateData } from "./RetentionFilterUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The body of the retention filter to be updated.
 */
export class RetentionFilterUpdateRequest {
  /**
   * The body of the retention filter to be updated.
   */
  "data": RetentionFilterUpdateData;

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
      type: "RetentionFilterUpdateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionFilterUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
