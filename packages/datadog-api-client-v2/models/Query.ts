/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AppBuilderEvent } from "./AppBuilderEvent";
import { QueryType } from "./QueryType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A query used by an app. This can take the form of an external action, a data transformation, or a state variable change.
 */
export class Query {
  /**
   * Events to listen for downstream of the query.
   */
  "events"?: Array<AppBuilderEvent>;
  /**
   * The ID of the query.
   */
  "id": string;
  /**
   * The name of the query. The name must be unique within the app and is visible in the app editor.
   */
  "name": string;
  /**
   * The properties of the query. The properties vary depending on the query type.
   */
  "properties"?: any;
  /**
   * The query type.
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
      format: "uuid",
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
