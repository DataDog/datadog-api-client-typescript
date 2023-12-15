/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ListRulesResponseDataItem } from "./ListRulesResponseDataItem";
import { ListRulesResponseLinks } from "./ListRulesResponseLinks";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Scorecard rules response.
 */
export class ListRulesResponse {
  /**
   * Array of rule details.
   */
  "data"?: Array<ListRulesResponseDataItem>;
  /**
   * Links attributes.
   */
  "links"?: ListRulesResponseLinks;

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
      type: "Array<ListRulesResponseDataItem>",
    },
    links: {
      baseName: "links",
      type: "ListRulesResponseLinks",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ListRulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
