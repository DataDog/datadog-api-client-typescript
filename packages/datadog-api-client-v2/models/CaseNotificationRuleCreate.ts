/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseNotificationRuleCreateAttributes } from "./CaseNotificationRuleCreateAttributes";
import { CaseNotificationRuleResourceType } from "./CaseNotificationRuleResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Notification rule create
 */
export class CaseNotificationRuleCreate {
  /**
   * Notification rule creation attributes
   */
  "attributes": CaseNotificationRuleCreateAttributes;
  /**
   * Notification rule resource type
   */
  "type": CaseNotificationRuleResourceType;

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
    attributes: {
      baseName: "attributes",
      type: "CaseNotificationRuleCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseNotificationRuleResourceType",
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
    return CaseNotificationRuleCreate.attributeTypeMap;
  }

  public constructor() {}
}
