import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame } from "./QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame";

export class QueryEventFilteredUsersRequestDataAttributesEventQuery {
  "query"?: string;
  "timeFrame"?: QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame;
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
      type: "string",
    },
    timeFrame: {
      baseName: "time_frame",
      type: "QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame",
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
    return QueryEventFilteredUsersRequestDataAttributesEventQuery.attributeTypeMap;
  }

  public constructor() {}
}
