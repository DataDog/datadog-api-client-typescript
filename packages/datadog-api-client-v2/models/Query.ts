/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AppBuilderEvent } from "./AppBuilderEvent";
import { QueryType } from "./QueryType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `Query` object.
 */
export class Query {
  /**
   * The `Query` `events`.
   */
  "events"?: Array<AppBuilderEvent>;
  /**
   * The `Query` `id`.
   */
  "id": string;
  /**
   * The `Query` `name`.
   */
  "name": string;
  /**
   * The `Query` `properties`.
   */
  "properties"?: any;
  /**
   * The definition of `QueryType` object.
   */
  "type": QueryType;

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
    events: {
      baseName: "events",
      type: "Array<AppBuilderEvent>",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    properties: {
      baseName: "properties",
      type: "any",
    },
    type: {
      baseName: "type",
      type: "QueryType",
      required: true,
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
    return Query.attributeTypeMap;
  }

  public constructor() {}
}
