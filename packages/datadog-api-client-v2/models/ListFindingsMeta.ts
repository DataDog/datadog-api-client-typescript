/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ListFindingsPage } from "./ListFindingsPage";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Metadata for pagination.
*/
export class ListFindingsMeta {
  /**
   * Pagination and findings count information.
  */
  "page"?: ListFindingsPage;
  /**
   * The point in time corresponding to the listed findings.
  */
  "snapshotTimestamp"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "page": {
      "baseName": "page",
      "type": "ListFindingsPage",
    },
    "snapshotTimestamp": {
      "baseName": "snapshot_timestamp",
      "type": "number",
      "format": "int64",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return ListFindingsMeta.attributeTypeMap;

  }

  public constructor() {











  }
}









