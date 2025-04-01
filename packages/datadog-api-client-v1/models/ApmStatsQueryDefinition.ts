/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApmStatsQueryColumnType } from "./ApmStatsQueryColumnType";
import { ApmStatsQueryRowType } from "./ApmStatsQueryRowType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The APM stats query for table and distributions widgets.
*/
export class ApmStatsQueryDefinition {
  /**
   * Column properties used by the front end for display.
  */
  "columns"?: Array<ApmStatsQueryColumnType>;
  /**
   * Environment name.
  */
  "env": string;
  /**
   * Operation name associated with service.
  */
  "name": string;
  /**
   * The organization's host group name and value.
  */
  "primaryTag": string;
  /**
   * Resource name.
  */
  "resource"?: string;
  /**
   * The level of detail for the request.
  */
  "rowType": ApmStatsQueryRowType;
  /**
   * Service name.
  */
  "service": string;

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
    "columns": {
      "baseName": "columns",
      "type": "Array<ApmStatsQueryColumnType>",
    },
    "env": {
      "baseName": "env",
      "type": "string",
      "required": true,
    },
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "primaryTag": {
      "baseName": "primary_tag",
      "type": "string",
      "required": true,
    },
    "resource": {
      "baseName": "resource",
      "type": "string",
    },
    "rowType": {
      "baseName": "row_type",
      "type": "ApmStatsQueryRowType",
      "required": true,
    },
    "service": {
      "baseName": "service",
      "type": "string",
      "required": true,
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




    return ApmStatsQueryDefinition.attributeTypeMap;

  }

  public constructor() {











  }
}









