import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FunnelRequestDataAttributesSearch } from "./FunnelRequestDataAttributesSearch";
import { FunnelRequestDataAttributesTime } from "./FunnelRequestDataAttributesTime";

export class FunnelRequestDataAttributes {
  "dataSource"?: string;
  "enforcedExecutionType"?: string;
  "requestId"?: string;
  "search"?: FunnelRequestDataAttributesSearch;
  "time"?: FunnelRequestDataAttributesTime;
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
    dataSource: {
      baseName: "data_source",
      type: "string",
    },
    enforcedExecutionType: {
      baseName: "enforced_execution_type",
      type: "string",
    },
    requestId: {
      baseName: "request_id",
      type: "string",
    },
    search: {
      baseName: "search",
      type: "FunnelRequestDataAttributesSearch",
    },
    time: {
      baseName: "time",
      type: "FunnelRequestDataAttributesTime",
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
    return FunnelRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
