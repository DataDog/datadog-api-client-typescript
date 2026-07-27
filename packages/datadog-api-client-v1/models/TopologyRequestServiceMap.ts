/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TopologyQueryServiceMap } from "./TopologyQueryServiceMap";
import { TopologyRequestType } from "./TopologyRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request that returns nodes and edges from the service map data source.
 */
export class TopologyRequestServiceMap {
  /**
   * Query to the service map topology data source.
   */
  "query"?: TopologyQueryServiceMap;
  /**
   * Widget request type.
   */
  "requestType"?: TopologyRequestType;

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
    query: {
      baseName: "query",
      type: "TopologyQueryServiceMap",
    },
    requestType: {
      baseName: "request_type",
      type: "TopologyRequestType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TopologyRequestServiceMap.attributeTypeMap;
  }

  public constructor() {}
}
