/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame } from "./QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
