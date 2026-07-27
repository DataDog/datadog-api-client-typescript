import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TopologyQueryServiceMap } from "./TopologyQueryServiceMap";
import { TopologyRequestType } from "./TopologyRequestType";

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
