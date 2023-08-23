/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTodoAttributes } from "./IncidentTodoAttributes";
import { IncidentTodoType } from "./IncidentTodoType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident todo response data.
 */
export class IncidentTodoResponseData {
  /**
   * Incident todo's attributes.
   */
  "attributes"?: IncidentTodoAttributes;
  /**
   * The incident todo's ID.
   */
  "id": string;
  /**
   * Todo resource type.
   */
  "type": IncidentTodoType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "IncidentTodoAttributes",
    },
    id: {
      type: "string",
      required: true,
    },
    type: {
      type: "IncidentTodoType",
      required: true,
    },
  };
}
