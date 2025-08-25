/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes to get a list of deployments.
*/
export class DORAListDeploymentsRequestAttributes {
  /**
   * Minimum timestamp for requested events.
  */
  "from"?: Date;
  /**
   * Maximum number of events in the response.
  */
  "limit"?: number;
  /**
   * Search query with event platform syntax.
  */
  "query"?: string;
  /**
   * Sort order (prefixed with `-` for descending).
  */
  "sort"?: string;
  /**
   * Maximum timestamp for requested events.
  */
  "to"?: Date;

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
    "from": {
      "baseName": "from",
      "type": "Date",
      "format": "date-time",
    },
    "limit": {
      "baseName": "limit",
      "type": "number",
      "format": "int32",
    },
    "query": {
      "baseName": "query",
      "type": "string",
    },
    "sort": {
      "baseName": "sort",
      "type": "string",
    },
    "to": {
      "baseName": "to",
      "type": "Date",
      "format": "date-time",
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




    return DORAListDeploymentsRequestAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









