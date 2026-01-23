/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomRuleDataType } from "./CustomRuleDataType";
import { CustomRuleRequestDataAttributes } from "./CustomRuleRequestDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class CustomRuleRequestData {
  "attributes"?: CustomRuleRequestDataAttributes;
  /**
   * Rule identifier
   */
  "id"?: string;
  /**
   * Resource type
   */
  "type"?: CustomRuleDataType;

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
      type: "CustomRuleRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CustomRuleDataType",
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
    return CustomRuleRequestData.attributeTypeMap;
  }

  public constructor() {}
}
