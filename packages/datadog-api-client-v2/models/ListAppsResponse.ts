/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Deployment } from "./Deployment";
import { ListAppsResponseDataItems } from "./ListAppsResponseDataItems";
import { ListAppsResponseMeta } from "./ListAppsResponseMeta";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A paginated list of apps matching the specified filters and sorting.
*/
export class ListAppsResponse {
  /**
   * An array of app definitions.
  */
  "data"?: Array<ListAppsResponseDataItems>;
  /**
   * Data on the version of the app that was published.
  */
  "included"?: Array<Deployment>;
  /**
   * Pagination metadata.
  */
  "meta"?: ListAppsResponseMeta;

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
      "type": "Array<ListAppsResponseDataItems>",
    },
    "included": {
      "baseName": "included",
      "type": "Array<Deployment>",
    },
    "meta": {
      "baseName": "meta",
      "type": "ListAppsResponseMeta",
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




    return ListAppsResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









