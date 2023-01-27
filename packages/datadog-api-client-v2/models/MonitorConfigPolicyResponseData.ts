/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorConfigPolicyAttributeResponse } from "./MonitorConfigPolicyAttributeResponse";
import { MonitorConfigPolicyResourceType } from "./MonitorConfigPolicyResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A monitor configuration policy data.
 */
export class MonitorConfigPolicyResponseData {
  /**
   * Policy and policy type for a monitor configuration policy.
   */
  "attributes"?: MonitorConfigPolicyAttributeResponse;
  /**
   * ID of this monitor configuration policy.
   */
  "id"?: string;
  /**
   * Monitor configuration policy resource type.
   */
  "type"?: MonitorConfigPolicyResourceType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "MonitorConfigPolicyAttributeResponse",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "MonitorConfigPolicyResourceType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorConfigPolicyResponseData.attributeTypeMap;
  }

  public constructor() {}
}
