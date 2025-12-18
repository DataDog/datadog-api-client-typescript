/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateOnCallNotificationRuleRequestData } from "./CreateOnCallNotificationRuleRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A top-level wrapper for creating a notification rule for a user
 */
export class CreateOnCallNotificationRuleRequest {
  /**
   * Data for creating an on-call notification rule
   */
  "data": CreateOnCallNotificationRuleRequestData;

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
      type: "CreateOnCallNotificationRuleRequestData",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateOnCallNotificationRuleRequest.attributeTypeMap;
  }

  public constructor() {}
}
