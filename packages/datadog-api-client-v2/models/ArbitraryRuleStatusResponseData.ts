/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ArbitraryRuleStatusResponseDataAttributes } from "./ArbitraryRuleStatusResponseDataAttributes";
import { ArbitraryRuleStatusResponseDataType } from "./ArbitraryRuleStatusResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Processing status for a custom allocation rule.
 */
export class ArbitraryRuleStatusResponseData {
  /**
   * Processing status for a custom allocation rule.
   */
  "attributes": ArbitraryRuleStatusResponseDataAttributes;
  /**
   * The unique identifier of the custom allocation rule.
   */
  "id": string;
  /**
   * Custom allocation rule status resource type.
   */
  "type": ArbitraryRuleStatusResponseDataType;

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
      type: "ArbitraryRuleStatusResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ArbitraryRuleStatusResponseDataType",
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
    return ArbitraryRuleStatusResponseData.attributeTypeMap;
  }

  public constructor() {}
}
