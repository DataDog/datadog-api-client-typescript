/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TopologyQuery } from "./TopologyQuery";
import { TopologyRequestType } from "./TopologyRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request that will return nodes and edges to be used by topology map.
 */
export class TopologyRequest {
  /**
   * Query to service-based topology data sources like the service map or data streams.
   */
  "query"?: TopologyQuery;
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
      type: "TopologyQuery",
    },
    requestType: {
      baseName: "request_type",
      type: "TopologyRequestType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TopologyRequest.attributeTypeMap;
  }

  public constructor() {}
}
