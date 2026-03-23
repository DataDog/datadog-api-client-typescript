/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetMultipleRulesetsRequestData } from "./GetMultipleRulesetsRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The request payload for retrieving rules for multiple rulesets in a single batch call.
 */
export class GetMultipleRulesetsRequest {
  /**
   * The primary data object in the get-multiple-rulesets request, containing request attributes and resource type.
   */
  "data"?: GetMultipleRulesetsRequestData;

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
      type: "GetMultipleRulesetsRequestData",
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
    return GetMultipleRulesetsRequest.attributeTypeMap;
  }

  public constructor() {}
}
