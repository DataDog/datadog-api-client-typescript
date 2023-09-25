/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RetentionFilterCreateData } from "./RetentionFilterCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The body of the retention filter to be created.
 */
export class RetentionFilterCreateRequest {
  /**
   * The body of the retention filter to be created.
   */
  "data": RetentionFilterCreateData;

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
      type: "RetentionFilterCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionFilterCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
