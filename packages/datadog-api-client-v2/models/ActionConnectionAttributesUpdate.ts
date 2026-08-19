/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ActionConnectionIntegrationUpdate } from "./ActionConnectionIntegrationUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ActionConnectionAttributesUpdate` object.
 */
export class ActionConnectionAttributesUpdate {
  /**
   * The definition of `ActionConnectionIntegrationUpdate` object.
   */
  "integration"?: ActionConnectionIntegrationUpdate;
  /**
   * Name of the connection
   */
  "name"?: string;
  /**
   * Tags associated with the connection. Each tag must follow the `key:value` format.
   * The `default` tag key is reserved.
   */
  "tags"?: Array<string>;

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
    integration: {
      baseName: "integration",
      type: "ActionConnectionIntegrationUpdate",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return ActionConnectionAttributesUpdate.attributeTypeMap;
  }

  public constructor() {}
}
