/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagIndexingRuleOptionsData } from "./TagIndexingRuleOptionsData";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Versioned configuration options for a tag indexing rule.
*/
export class TagIndexingRuleOptions {
  /**
   * Data payload for tag indexing rule options.
  */
  "data"?: TagIndexingRuleOptionsData;
  /**
   * Options schema version. Only `1` is supported.
  */
  "version"?: number;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "data": {
      "baseName": "data",
      "type": "TagIndexingRuleOptionsData",
    },
    "version": {
      "baseName": "version",
      "type": "number",
      "format": "int64",
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




    return TagIndexingRuleOptions.attributeTypeMap;

  }

  public constructor() {











  }
}









