import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ActionQueryProperties } from "./ActionQueryProperties";
import { ActionQueryType } from "./ActionQueryType";
import { AppBuilderEvent } from "./AppBuilderEvent";

/**
 * An action query. This query type is used to trigger an action, such as sending a HTTP request.
 */
export class ActionQuery {
  /**
   * Events to listen for downstream of the action query.
   */
  "events"?: Array<AppBuilderEvent>;
  /**
   * The ID of the action query.
   */
  "id": string;
  /**
   * A unique identifier for this action query. This name is also used to access the query's result throughout the app.
   */
  "name": string;
  /**
   * The properties of the action query.
   */
  "properties": ActionQueryProperties;
  /**
   * The action query type.
   */
  "type": ActionQueryType;
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
      type: "ActionQueryProperties",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ActionQueryType",
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
    return ActionQuery.attributeTypeMap;
  }

  public constructor() {}
}
