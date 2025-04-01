/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TopologyQueryDataSource } from "./TopologyQueryDataSource";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Query to service-based topology data sources like the service map or data streams.
*/
export class TopologyQuery {
  /**
   * Name of the data source
  */
  "dataSource"?: TopologyQueryDataSource;
  /**
   * Your environment and primary tag (or * if enabled for your account).
  */
  "filters"?: Array<string>;
  /**
   * Name of the service
  */
  "service"?: string;

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
    "dataSource": {
      "baseName": "data_source",
      "type": "TopologyQueryDataSource",
    },
    "filters": {
      "baseName": "filters",
      "type": "Array<string>",
    },
    "service": {
      "baseName": "service",
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




    return TopologyQuery.attributeTypeMap;

  }

  public constructor() {











  }
}









