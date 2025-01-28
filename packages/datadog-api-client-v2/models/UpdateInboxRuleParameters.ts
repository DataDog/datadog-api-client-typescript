/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UpdateInboxRuleParametersData } from "./UpdateInboxRuleParametersData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Body of the inbox rule update request
 */
export class UpdateInboxRuleParameters {
  /**
   * Data of the inbox rule update request: the rule id, the rule type, and the rule attributes. All fields are required.
   */
  "data"?: UpdateInboxRuleParametersData;

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
      type: "UpdateInboxRuleParametersData",
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
    return UpdateInboxRuleParameters.attributeTypeMap;
  }

  public constructor() {}
}
