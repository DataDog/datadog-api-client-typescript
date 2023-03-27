/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTodoCreateData } from "./IncidentTodoCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Create request for an incident todo.
 */
export class IncidentTodoCreateRequest {
  /**
   * Incident todo data for a create request.
   */
  "data": IncidentTodoCreateData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "IncidentTodoCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentTodoCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}