/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentResponseMeta } from "./IncidentResponseMeta";
import { IncidentTodoResponseData } from "./IncidentTodoResponseData";
import { IncidentTodoResponseIncludedItem } from "./IncidentTodoResponseIncludedItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with a list of incident todos.
 */
export class IncidentTodoListResponse {
  /**
   * An array of incident todos.
   */
  "data": Array<IncidentTodoResponseData>;
  /**
   * Included related resources that the user requested.
   */
  "included"?: Array<IncidentTodoResponseIncludedItem>;
  /**
   * The metadata object containing pagination metadata.
   */
  "meta"?: IncidentResponseMeta;

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
    data: {
      baseName: "data",
      type: "Array<IncidentTodoResponseData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentTodoResponseIncludedItem>",
    },
    meta: {
      baseName: "meta",
      type: "IncidentResponseMeta",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentTodoListResponse.attributeTypeMap;
  }

  public constructor() {}
}
