import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Connection } from "./Connection";
import { ConnectionEnvEnv } from "./ConnectionEnvEnv";
import { ConnectionGroup } from "./ConnectionGroup";

/**
 * A list of connections or connection groups used in the workflow.
 */
export class ConnectionEnv {
  /**
   * The `ConnectionEnv` `connectionGroups`.
   */
  "connectionGroups"?: Array<ConnectionGroup>;
  /**
   * The `ConnectionEnv` `connections`.
   */
  "connections"?: Array<Connection>;
  /**
   * The definition of `ConnectionEnvEnv` object.
   */
  "env": ConnectionEnvEnv;
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
    connectionGroups: {
      baseName: "connectionGroups",
      type: "Array<ConnectionGroup>",
    },
    connections: {
      baseName: "connections",
      type: "Array<Connection>",
    },
    env: {
      baseName: "env",
      type: "ConnectionEnvEnv",
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
    return ConnectionEnv.attributeTypeMap;
  }

  public constructor() {}
}
