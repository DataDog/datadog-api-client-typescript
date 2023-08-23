/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTodoAnonymousAssigneeSource } from "./IncidentTodoAnonymousAssigneeSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Anonymous assignee entity.
 */
export class IncidentTodoAnonymousAssignee {
  /**
   * URL for assignee's icon.
   */
  "icon": string;
  /**
   * Anonymous assignee's ID.
   */
  "id": string;
  /**
   * Assignee's name.
   */
  "name": string;
  /**
   * The source of the anonymous assignee.
   */
  "source": IncidentTodoAnonymousAssigneeSource;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    icon: {
      type: "string",
      required: true,
    },
    id: {
      type: "string",
      required: true,
    },
    name: {
      type: "string",
      required: true,
    },
    source: {
      type: "IncidentTodoAnonymousAssigneeSource",
      required: true,
    },
  };
}
