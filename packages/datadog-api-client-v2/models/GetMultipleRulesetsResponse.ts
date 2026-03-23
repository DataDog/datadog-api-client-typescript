/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetMultipleRulesetsResponseData } from "./GetMultipleRulesetsResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response payload for the get-multiple-rulesets endpoint, containing the requested rulesets and their rules.
 */
export class GetMultipleRulesetsResponse {
  /**
   * The primary data object in the get-multiple-rulesets response, containing the response attributes and resource type.
   */
  "data"?: GetMultipleRulesetsResponseData;

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
      type: "GetMultipleRulesetsResponseData",
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
    return GetMultipleRulesetsResponse.attributeTypeMap;
  }

  public constructor() {}
}
