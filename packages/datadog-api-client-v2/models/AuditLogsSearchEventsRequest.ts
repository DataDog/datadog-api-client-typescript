/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AuditLogsQueryFilter } from "./AuditLogsQueryFilter";
import { AuditLogsQueryOptions } from "./AuditLogsQueryOptions";
import { AuditLogsQueryPageOptions } from "./AuditLogsQueryPageOptions";
import { AuditLogsSort } from "./AuditLogsSort";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The request for a Audit Logs events list.
*/
export class AuditLogsSearchEventsRequest {
  /**
   * Search and filter query settings.
  */
  "filter"?: AuditLogsQueryFilter;
  /**
   * Global query options that are used during the query.
   * Note: Specify either timezone or time offset, not both. Otherwise, the query fails.
  */
  "options"?: AuditLogsQueryOptions;
  /**
   * Paging attributes for listing events.
  */
  "page"?: AuditLogsQueryPageOptions;
  /**
   * Sort parameters when querying events.
  */
  "sort"?: AuditLogsSort;

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
    "filter": {
      "baseName": "filter",
      "type": "AuditLogsQueryFilter",
    },
    "options": {
      "baseName": "options",
      "type": "AuditLogsQueryOptions",
    },
    "page": {
      "baseName": "page",
      "type": "AuditLogsQueryPageOptions",
    },
    "sort": {
      "baseName": "sort",
      "type": "AuditLogsSort",
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




    return AuditLogsSearchEventsRequest.attributeTypeMap;

  }

  public constructor() {











  }
}









