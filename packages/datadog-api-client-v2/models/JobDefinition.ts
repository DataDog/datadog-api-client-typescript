/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CalculatedField } from "./CalculatedField";
import { HistoricalJobOptions } from "./HistoricalJobOptions";
import { HistoricalJobQuery } from "./HistoricalJobQuery";
import { SecurityMonitoringReferenceTable } from "./SecurityMonitoringReferenceTable";
import { SecurityMonitoringRuleCaseCreate } from "./SecurityMonitoringRuleCaseCreate";
import { SecurityMonitoringThirdPartyRuleCaseCreate } from "./SecurityMonitoringThirdPartyRuleCaseCreate";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Definition of a historical job.
*/
export class JobDefinition {
  /**
   * Calculated fields.
  */
  "calculatedFields"?: Array<CalculatedField>;
  /**
   * Cases used for generating job results.
  */
  "cases": Array<SecurityMonitoringRuleCaseCreate>;
  /**
   * Starting time of data analyzed by the job.
  */
  "from": number;
  /**
   * Additional grouping to perform on top of the existing groups in the query section. Must be a subset of the existing groups.
  */
  "groupSignalsBy"?: Array<string>;
  /**
   * Index used to load the data.
  */
  "index": string;
  /**
   * Message for generated results.
  */
  "message": string;
  /**
   * Job name.
  */
  "name": string;
  /**
   * Job options.
  */
  "options"?: HistoricalJobOptions;
  /**
   * Queries for selecting logs analyzed by the job.
  */
  "queries": Array<HistoricalJobQuery>;
  /**
   * Reference tables used in the queries.
  */
  "referenceTables"?: Array<SecurityMonitoringReferenceTable>;
  /**
   * Tags for generated signals.
  */
  "tags"?: Array<string>;
  /**
   * Cases for generating results from third-party detection method. Only available for third-party detection method.
  */
  "thirdPartyCases"?: Array<SecurityMonitoringThirdPartyRuleCaseCreate>;
  /**
   * Ending time of data analyzed by the job.
  */
  "to": number;
  /**
   * Job type.
  */
  "type"?: string;

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
    "calculatedFields": {
      "baseName": "calculatedFields",
      "type": "Array<CalculatedField>",
    },
    "cases": {
      "baseName": "cases",
      "type": "Array<SecurityMonitoringRuleCaseCreate>",
      "required": true,
    },
    "from": {
      "baseName": "from",
      "type": "number",
      "required": true,
      "format": "int64",
    },
    "groupSignalsBy": {
      "baseName": "groupSignalsBy",
      "type": "Array<string>",
    },
    "index": {
      "baseName": "index",
      "type": "string",
      "required": true,
    },
    "message": {
      "baseName": "message",
      "type": "string",
      "required": true,
    },
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "options": {
      "baseName": "options",
      "type": "HistoricalJobOptions",
    },
    "queries": {
      "baseName": "queries",
      "type": "Array<HistoricalJobQuery>",
      "required": true,
    },
    "referenceTables": {
      "baseName": "referenceTables",
      "type": "Array<SecurityMonitoringReferenceTable>",
    },
    "tags": {
      "baseName": "tags",
      "type": "Array<string>",
    },
    "thirdPartyCases": {
      "baseName": "thirdPartyCases",
      "type": "Array<SecurityMonitoringThirdPartyRuleCaseCreate>",
    },
    "to": {
      "baseName": "to",
      "type": "number",
      "required": true,
      "format": "int64",
    },
    "type": {
      "baseName": "type",
      "type": "string",
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




    return JobDefinition.attributeTypeMap;

  }

  public constructor() {











  }
}









