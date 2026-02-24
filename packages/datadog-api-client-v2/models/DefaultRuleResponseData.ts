/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DefaultRuleResponseAttributes } from "./DefaultRuleResponseAttributes";
import { DefaultRuleType } from "./DefaultRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Default rule data.
 */
export class DefaultRuleResponseData {
  /**
   * Default rule attributes.
   */
  "attributes": DefaultRuleResponseAttributes;
  /**
   * The unique ID of the default rule.
   */
  "id": string;
  /**
   * The JSON:API type for default rules.
   */
  "type": DefaultRuleType;

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
      type: "DefaultRuleResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DefaultRuleType",
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
    return DefaultRuleResponseData.attributeTypeMap;
  }

  public constructor() {}
}
