import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TopologyQueryDataStreams } from "./TopologyQueryDataStreams";
import { TopologyRequestType } from "./TopologyRequestType";

/**
 * Request that returns nodes and edges from the data streams data source.
 */
export class TopologyRequestDataStreams {
  /**
   * Query to the data streams topology data source.
   */
  "query"?: TopologyQueryDataStreams;
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
      type: "TopologyQueryDataStreams",
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
    return TopologyRequestDataStreams.attributeTypeMap;
  }

  public constructor() {}
}
