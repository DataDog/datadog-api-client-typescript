/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTodoAttributes } from "./IncidentTodoAttributes";
import { IncidentTodoType } from "./IncidentTodoType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident todo data for a create request.
 */
export class IncidentTodoCreateData {
  /**
   * Incident todo's attributes.
   */
  "attributes": IncidentTodoAttributes;
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
      baseName: "attributes",
      type: "IncidentTodoAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentTodoType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentTodoCreateData.attributeTypeMap;
  }

  public constructor() {}
}
