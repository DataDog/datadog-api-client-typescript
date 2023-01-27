/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorConfigPolicyResponseData } from "./MonitorConfigPolicyResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for retrieving a monitor configuration policy.
 */
export class MonitorConfigPolicyResponse {
  /**
   * A monitor configuration policy data.
   */
  "data"?: MonitorConfigPolicyResponseData;

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
      type: "MonitorConfigPolicyResponseData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorConfigPolicyResponse.attributeTypeMap;
  }

  public constructor() {}
}
