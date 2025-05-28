/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetRuleVersionHistoryDataType } from "./GetRuleVersionHistoryDataType";
import { RuleVersionHistory } from "./RuleVersionHistory";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Data for the rule version history.
*/
export class GetRuleVersionHistoryData {
  /**
   * Response object containing the version history of a rule.
  */
  "attributes"?: RuleVersionHistory;
  /**
   * ID of the rule.
  */
  "id"?: string;
  /**
   * Type of data.
  */
  "type"?: GetRuleVersionHistoryDataType;

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
    "attributes": {
      "baseName": "attributes",
      "type": "RuleVersionHistory",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "GetRuleVersionHistoryDataType",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return GetRuleVersionHistoryData.attributeTypeMap;

  }

  public constructor() {











  }
}









