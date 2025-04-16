/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorNotificationRuleCreateRequestData } from "./MonitorNotificationRuleCreateRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request for creating a monitor notification rule.
 */
export class MonitorNotificationRuleCreateRequest {
  /**
   * Object to create a monitor notification rule.
   */
  "data": MonitorNotificationRuleCreateRequestData;

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
      type: "MonitorNotificationRuleCreateRequestData",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorNotificationRuleCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
