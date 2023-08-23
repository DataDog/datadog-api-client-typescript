/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTodoResponseData } from "./IncidentTodoResponseData";
import { IncidentTodoResponseIncludedItem } from "./IncidentTodoResponseIncludedItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with an incident todo.
 */
export class IncidentTodoResponse {
  /**
   * Incident todo response data.
   */
  "data": IncidentTodoResponseData;
  /**
   * Included related resources that the user requested.
   */
  "included"?: Array<IncidentTodoResponseIncludedItem>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "IncidentTodoResponseData",
      required: true,
    },
    included: {
      type: "Array<IncidentTodoResponseIncludedItem>",
    },
  };
}
