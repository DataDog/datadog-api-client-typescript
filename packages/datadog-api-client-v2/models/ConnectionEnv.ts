/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Connection } from "./Connection";
import { ConnectionEnvEnv } from "./ConnectionEnvEnv";
import { ConnectionGroup } from "./ConnectionGroup";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
      type: "{ [key: string]: any; }",
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
