/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { QueryUsersRequestDataAttributes } from "./QueryUsersRequestDataAttributes";
import { QueryUsersRequestDataType } from "./QueryUsersRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object containing the resource type and attributes for querying users.
 */
export class QueryUsersRequestData {
  /**
   * Attributes for filtering and shaping the user query results.
   */
  "attributes"?: QueryUsersRequestDataAttributes;
  /**
   * Unique identifier for the query users request resource.
   */
  "id"?: string;
  /**
   * Query users request resource type.
   */
  "type": QueryUsersRequestDataType;

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
    attributes: {
      baseName: "attributes",
      type: "QueryUsersRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "QueryUsersRequestDataType",
      required: true,
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
    return QueryUsersRequestData.attributeTypeMap;
  }

  public constructor() {}
}
