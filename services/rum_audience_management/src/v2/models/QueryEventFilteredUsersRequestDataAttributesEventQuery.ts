import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame } from "./QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame";

/**
 * Event platform query used to filter users based on their event activity within a specified time window.
 */
export class QueryEventFilteredUsersRequestDataAttributesEventQuery {
  /**
   * The event platform query expression for filtering users by their event activity.
   */
  "query"?: string;
  /**
   * The time window defining the start and end of the event query period as Unix timestamps.
   */
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
