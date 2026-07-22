/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GovernanceInsightAuditCompute } from "./GovernanceInsightAuditCompute";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * An audit log query used to compute an insight value.
*/
export class GovernanceInsightAuditQuery {
  /**
   * The aggregation applied to an audit log query.
  */
  "compute": GovernanceInsightAuditCompute;
  /**
   * The audit log indexes the query runs against.
  */
  "indexes": Array<string>;
  /**
   * The audit log search query string.
  */
  "query": string;
  /**
   * The data source the query runs against.
  */
  "source": string;

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
      "type": "GovernanceInsightAuditCompute",
      "required": true,
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
    "source": {
      "baseName": "source",
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




    return GovernanceInsightAuditQuery.attributeTypeMap;

  }

  public constructor() {











  }
}









