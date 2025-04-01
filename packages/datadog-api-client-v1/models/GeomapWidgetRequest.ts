/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { FormulaAndFunctionResponseFormat } from "./FormulaAndFunctionResponseFormat";
import { ListStreamColumn } from "./ListStreamColumn";
import { ListStreamQuery } from "./ListStreamQuery";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { WidgetFormula } from "./WidgetFormula";
import { WidgetSortBy } from "./WidgetSortBy";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * An updated geomap widget.
*/
export class GeomapWidgetRequest {
  /**
   * Widget columns.
  */
  "columns"?: Array<ListStreamColumn>;
  /**
   * List of formulas that operate on queries.
  */
  "formulas"?: Array<WidgetFormula>;
  /**
   * The log query.
  */
  "logQuery"?: LogQueryDefinition;
  /**
   * The widget metrics query.
  */
  "q"?: string;
  /**
   * List of queries that can be returned directly or used in formulas.
  */
  "queries"?: Array<FormulaAndFunctionQueryDefinition>;
  /**
   * Updated list stream widget.
  */
  "query"?: ListStreamQuery;
  /**
   * Timeseries, scalar, or event list response. Event list response formats are supported by Geomap widgets.
  */
  "responseFormat"?: FormulaAndFunctionResponseFormat;
  /**
   * The log query.
  */
  "rumQuery"?: LogQueryDefinition;
  /**
   * The log query.
  */
  "securityQuery"?: LogQueryDefinition;
  /**
   * The controls for sorting the widget.
  */
  "sort"?: WidgetSortBy;

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
      "type": "Array<ListStreamColumn>",
    },
    "formulas": {
      "baseName": "formulas",
      "type": "Array<WidgetFormula>",
    },
    "logQuery": {
      "baseName": "log_query",
      "type": "LogQueryDefinition",
    },
    "q": {
      "baseName": "q",
      "type": "string",
    },
    "queries": {
      "baseName": "queries",
      "type": "Array<FormulaAndFunctionQueryDefinition>",
    },
    "query": {
      "baseName": "query",
      "type": "ListStreamQuery",
    },
    "responseFormat": {
      "baseName": "response_format",
      "type": "FormulaAndFunctionResponseFormat",
    },
    "rumQuery": {
      "baseName": "rum_query",
      "type": "LogQueryDefinition",
    },
    "securityQuery": {
      "baseName": "security_query",
      "type": "LogQueryDefinition",
    },
    "sort": {
      "baseName": "sort",
      "type": "WidgetSortBy",
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




    return GeomapWidgetRequest.attributeTypeMap;

  }

  public constructor() {











  }
}









