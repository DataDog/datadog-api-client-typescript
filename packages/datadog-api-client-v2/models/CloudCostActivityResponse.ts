/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudCostActivity } from "./CloudCostActivity";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for Cloud Cost activity.
 */
export class CloudCostActivityResponse {
  /**
   * Cloud Cost Activity.
   */
  "data"?: CloudCostActivity;

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
      type: "CloudCostActivity",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudCostActivityResponse.attributeTypeMap;
  }

  public constructor() {}
}
