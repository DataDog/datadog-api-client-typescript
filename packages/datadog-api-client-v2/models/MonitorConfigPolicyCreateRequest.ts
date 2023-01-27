/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorConfigPolicyCreateData } from "./MonitorConfigPolicyCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request for creating a monitor configuration policy.
 */
export class MonitorConfigPolicyCreateRequest {
  /**
   * A monitor configuration policy data.
   */
  "data": MonitorConfigPolicyCreateData;

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
      type: "MonitorConfigPolicyCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorConfigPolicyCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
