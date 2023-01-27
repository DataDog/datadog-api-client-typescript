/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorConfigPolicyEditData } from "./MonitorConfigPolicyEditData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request for editing a monitor configuration policy.
 */
export class MonitorConfigPolicyEditRequest {
  /**
   * A monitor configuration policy data.
   */
  "data": MonitorConfigPolicyEditData;

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
      type: "MonitorConfigPolicyEditData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorConfigPolicyEditRequest.attributeTypeMap;
  }

  public constructor() {}
}
