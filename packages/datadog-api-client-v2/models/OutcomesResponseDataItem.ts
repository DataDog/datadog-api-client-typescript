/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OutcomesBatchResponseAttributes } from "./OutcomesBatchResponseAttributes";
import { OutcomeType } from "./OutcomeType";
import { RuleOutcomeRelationships } from "./RuleOutcomeRelationships";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A single rule outcome.
*/
export class OutcomesResponseDataItem {
  /**
   * The JSON:API attributes for an outcome.
  */
  "attributes"?: OutcomesBatchResponseAttributes;
  /**
   * The unique ID for a rule outcome.
  */
  "id"?: string;
  /**
   * The JSON:API relationship to a scorecard rule.
  */
  "relationships"?: RuleOutcomeRelationships;
  /**
   * The JSON:API type for an outcome.
  */
  "type"?: OutcomeType;

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
      "type": "OutcomesBatchResponseAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "relationships": {
      "baseName": "relationships",
      "type": "RuleOutcomeRelationships",
    },
    "type": {
      "baseName": "type",
      "type": "OutcomeType",
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




    return OutcomesResponseDataItem.attributeTypeMap;

  }

  public constructor() {











  }
}









