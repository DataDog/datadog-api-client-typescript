/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeMeta } from "./DowntimeMeta";
import { DowntimeResponseData } from "./DowntimeResponseData";
import { DowntimeResponseIncludedItem } from "./DowntimeResponseIncludedItem";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Response for retrieving all downtimes.
*/
export class ListDowntimesResponse {
  /**
   * An array of downtimes.
  */
  "data"?: Array<DowntimeResponseData>;
  /**
   * Array of objects related to the downtimes.
  */
  "included"?: Array<DowntimeResponseIncludedItem>;
  /**
   * Pagination metadata returned by the API.
  */
  "meta"?: DowntimeMeta;

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
    "data": {
      "baseName": "data",
      "type": "Array<DowntimeResponseData>",
    },
    "included": {
      "baseName": "included",
      "type": "Array<DowntimeResponseIncludedItem>",
    },
    "meta": {
      "baseName": "meta",
      "type": "DowntimeMeta",
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




    return ListDowntimesResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









