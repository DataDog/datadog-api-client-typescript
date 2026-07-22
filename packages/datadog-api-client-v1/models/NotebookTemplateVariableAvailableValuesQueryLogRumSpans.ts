/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookTemplateVariableAvailableValuesQueryGroupBy } from "./NotebookTemplateVariableAvailableValuesQueryGroupBy";
import { NotebookTemplateVariableAvailableValuesQuerySearch } from "./NotebookTemplateVariableAvailableValuesQuerySearch";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Available values query for logs, RUM, or spans data sources.
*/
export class NotebookTemplateVariableAvailableValuesQueryLogRumSpans {
  /**
   * The data source for the query. Must be one of `logs`, `rum`, or `spans`.
  */
  "dataSource": string;
  /**
   * Group-by fields for the query.
  */
  "groupBy": Array<NotebookTemplateVariableAvailableValuesQueryGroupBy>;
  /**
   * Search parameters for an available values query.
  */
  "search": NotebookTemplateVariableAvailableValuesQuerySearch;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "dataSource": {
      "baseName": "data_source",
      "type": "string",
      "required": true,
    },
    "groupBy": {
      "baseName": "group_by",
      "type": "Array<NotebookTemplateVariableAvailableValuesQueryGroupBy>",
      "required": true,
    },
    "search": {
      "baseName": "search",
      "type": "NotebookTemplateVariableAvailableValuesQuerySearch",
      "required": true,
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return NotebookTemplateVariableAvailableValuesQueryLogRumSpans.attributeTypeMap;

  }

  public constructor() {











  }
}









