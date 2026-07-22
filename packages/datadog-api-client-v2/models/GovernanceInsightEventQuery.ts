/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GovernanceInsightEventCompute } from "./GovernanceInsightEventCompute";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * An event query used to compute an insight value.
*/
export class GovernanceInsightEventQuery {
  /**
   * The aggregation applied to an event query.
  */
  "compute"?: GovernanceInsightEventCompute;
  /**
   * The event indexes the query runs against.
  */
  "indexes": Array<string>;
  /**
   * The event search query string.
  */
  "query": string;

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
    "compute": {
      "baseName": "compute",
      "type": "GovernanceInsightEventCompute",
    },
    "indexes": {
      "baseName": "indexes",
      "type": "Array<string>",
      "required": true,
    },
    "query": {
      "baseName": "query",
      "type": "string",
      "required": true,
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




    return GovernanceInsightEventQuery.attributeTypeMap;

  }

  public constructor() {











  }
}









